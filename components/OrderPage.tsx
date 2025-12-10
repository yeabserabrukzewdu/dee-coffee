
import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useSupabase } from '../hooks/useSupabase';
import { Reveal } from './Reveal';

const InputField = ({ id, label, type = "text", placeholder = "" }) => (
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
      required
    />
  </div>
);

export function OrderPage() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const { supabase, error: supabaseError, loading: supabaseLoading } = useSupabase();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!supabase) {
          setSubmitError('Database connection not available. Please try again later.');
          return;
        }

        setLoading(true);
        setSubmitError(null);
        
        const formData = new FormData(e.currentTarget);
        
        const dataToInsert = {
          full_name: formData.get('fullName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          address: formData.get('address'),
          country: formData.get('country'),
          interest: formData.get('interest'),
        };

        try {
          const { error: insertError } = await supabase
            .from('sample_requests')
            .insert([dataToInsert]);
          
          if (insertError) {
            throw insertError;
          }

          setSubmitted(true);

        } catch (err: any) {
          setSubmitError(err.message || 'An unexpected error occurred. Please try again.');
        } finally {
          setLoading(false);
        }
    };

    if (submitted) {
      return (
        <section className="py-24 md:py-32 bg-[#FDFBF7] dark:bg-[#121212] min-h-screen">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('orderPage.successMessage')}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">{t('orderPage.subheadline')}</p>
              <a href="/#" className="mt-8 inline-block bg-gold-accent text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all">
                {t('nav.home')}
              </a>
            </Reveal>
          </div>
        </section>
      );
    }

    return (
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Reveal>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-balance text-gray-900 dark:text-white transition-colors duration-300">
                {t('orderPage.headline')}
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {t('orderPage.subheadline')}
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <form 
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto bg-white dark:bg-[#181818] p-8 md:p-12 rounded-lg shadow-2xl transition-colors duration-300" 
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField id="fullName" label={t('orderPage.fullName')} />
                <InputField id="email" label={t('orderPage.email')} type="email" />
                <InputField id="phone" label={t('orderPage.phone')} type="tel" />
                <InputField id="company" label={t('orderPage.company')} />
                <div className="md:col-span-2">
                  <InputField id="address" label={t('orderPage.address')} />
                </div>
                <div className="md:col-span-2">
                   <InputField id="country" label={t('orderPage.country')} />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    {t('orderPage.interest')}
                  </label>
                  <textarea
                    id="interest"
                    name="interest"
                    rows={4}
                    placeholder={t('orderPage.interestPlaceholder')}
                    className="w-full bg-[#FDFBF7] dark:bg-[#222] border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-accent transition-colors duration-300"
                  ></textarea>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button 
                  type="submit"
                  disabled={loading || supabaseLoading}
                  className="bg-gold-accent text-gray-900 font-bold py-3 px-12 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {supabaseLoading ? 'Connecting...' : (loading ? 'Submitting...' : t('orderPage.submit'))}
                </button>
                {supabaseError && <p className="text-red-500 mt-4">Database Error: {supabaseError}</p>}
                {submitError && <p className="text-red-500 mt-4">{submitError}</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    );
}
