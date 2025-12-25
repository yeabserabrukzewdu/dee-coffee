
import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useSupabase } from '../hooks/usesupabase.ts';
import { Reveal } from './Reveal';

const InputField = ({ id, label, type = "text", placeholder = "", required = true }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full bg-[#FDFBF7] dark:bg-[#222] border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-accent transition-colors duration-300"
      required={required}
    />
  </div>
);

export function OrderPage() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'failed'>('idle');
    const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
    const { supabase, loading: supabaseLoading } = useSupabase();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!supabase) {
          setSubmitError('Database connection not available.');
          return;
        }

        setLoading(true);
        setSubmitError(null);
        setEmailStatus('sending');
        
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const fullName = formData.get('fullName') as string;
        const interest = formData.get('interest') as string;
        
        setSubmittedEmail(email);
        
        const dataToInsert = {
          full_name: fullName,
          email: email,
          phone: formData.get('phone'),
          company: formData.get('company'),
          address: formData.get('address'),
          country: formData.get('country'),
          interest: interest,
        };

        try {
          // 1. Save to Database
          const { error: insertError } = await supabase
            .from('sample_requests')
            .insert([dataToInsert]);
          
          if (insertError) throw insertError;

          // 2. Trigger Auto-Response Email
          try {
            const emailResponse = await fetch('/api/send-auto-response', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, fullName, interest }),
            });
            
            const contentType = emailResponse.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
              const emailData = await emailResponse.json();
              if (emailResponse.ok && emailData.success) {
                setEmailStatus('success');
              } else {
                setEmailStatus('failed');
              }
            } else {
              // Server returned text/html (likely a 500 error page)
              console.error('Server returned non-JSON response');
              setEmailStatus('failed');
            }
          } catch (emailErr) {
            console.error("Fetch error:", emailErr);
            setEmailStatus('failed');
          }

          setSubmitted(true);

        } catch (err: any) {
          setSubmitError(err.message || 'Submission failed.');
          setEmailStatus('failed');
        } finally {
          setLoading(false);
        }
    };

    if (submitted) {
      return (
        <section className="py-24 md:py-32 bg-[#FDFBF7] dark:bg-[#121212] min-h-screen flex items-center">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <div className="bg-white dark:bg-[#181818] p-12 rounded-2xl shadow-2xl max-w-2xl mx-auto border-t-4 border-gold-accent">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('orderPage.successMessage')}</h1>
                
                {emailStatus === 'success' ? (
                   <p className="text-sm text-green-600 dark:text-green-400 mb-8 font-bold">
                     Confirmation email sent to {submittedEmail}.
                   </p>
                ) : (
                   <p className="text-sm text-amber-600 dark:text-amber-400 mb-8 italic">
                     Data saved. Our team will contact you soon.
                   </p>
                )}

                <a href="#/" className="inline-block bg-gold-accent text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all">
                  {t('nav.home')}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      );
    }

    return (
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Reveal>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t('contact.getInTouch')}
              </h1>
            </Reveal>
          </div>
          
          <div className="max-w-2xl mx-auto">
             <Reveal delay={200}>
                <div className="bg-white dark:bg-[#181818] p-8 md:p-10 rounded-2xl shadow-2xl transition-colors duration-300">
                   <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">
                     Request Sample
                   </h3>
                   <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <InputField id="fullName" label={t('orderPage.fullName')} />
                        <InputField id="email" label={t('orderPage.email')} type="email" />
                        <InputField id="phone" label={t('orderPage.phone')} type="tel" />
                        <InputField id="company" label={t('orderPage.company')} />
                        <div className="md:col-span-2">
                           <InputField id="country" label={t('orderPage.country')} />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {t('orderPage.interest')}
                          </label>
                          <textarea
                            id="interest"
                            name="interest"
                            rows={4}
                            className="w-full bg-[#FDFBF7] dark:bg-[#222] border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-accent transition-colors duration-300"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-8">
                        <button 
                          type="submit"
                          disabled={loading || supabaseLoading}
                          className="w-full bg-gold-accent text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all shadow-md disabled:opacity-50"
                        >
                          {loading ? 'Submitting...' : t('orderPage.submit')}
                        </button>
                        {submitError && <p className="text-red-500 mt-4 text-sm text-center">{submitError}</p>}
                      </div>
                   </form>
                </div>
             </Reveal>
          </div>
        </div>
      </section>
    );
}
