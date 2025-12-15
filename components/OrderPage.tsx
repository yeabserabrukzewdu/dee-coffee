
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
        <section className="py-24 md:py-32 bg-[#FDFBF7] dark:bg-[#121212] min-h-screen flex items-center">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <div className="bg-white dark:bg-[#181818] p-12 rounded-2xl shadow-2xl max-w-2xl mx-auto border-t-4 border-gold-accent">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('orderPage.successMessage')}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{t('orderPage.subheadline')}</p>
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
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                {t('contact.getInTouch')}
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('orderPage.subheadline')}
              </p>
            </Reveal>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
             {/* Contact Info Column */}
             <Reveal delay={100} className="space-y-8">
                   {/* Contact Cards */}
                   <div className="bg-white dark:bg-[#181818] p-8 rounded-2xl shadow-lg border-l-4 border-gold-accent transition-colors duration-300">
                      <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
                        {t('contact.getInTouch')}
                      </h3>
                      
                      <div className="space-y-8">
                         <div className="flex items-start gap-5 group">
                            <div className="bg-[#FDFBF7] dark:bg-[#222] p-3 rounded-full text-gold-accent group-hover:scale-110 transition-transform shadow-sm">
                               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                               <p className="font-bold text-gray-900 dark:text-white text-lg mb-1">{t('contact.addressTitle')}</p>
                               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('contact.address')}</p>
                            </div>
                         </div>

                         <div className="flex items-start gap-5 group">
                            <div className="bg-[#FDFBF7] dark:bg-[#222] p-3 rounded-full text-gold-accent group-hover:scale-110 transition-transform shadow-sm">
                               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                               <p className="font-bold text-gray-900 dark:text-white text-lg mb-1">{t('contact.phoneTitle')}</p>
                               <p className="text-gray-600 dark:text-gray-400 hover:text-gold-accent transition-colors"><a href="tel:+251911223344">+251 911 22 33 44 </a></p>
                               <p className="text-gray-600 dark:text-gray-400 hover:text-gold-accent transition-colors"><a href="tel:+251911223344">+251 911 22 33 44 </a></p>
                            </div>
                         </div>

                         <div className="flex items-start gap-5 group">
                            <div className="bg-[#FDFBF7] dark:bg-[#222] p-3 rounded-full text-gold-accent group-hover:scale-110 transition-transform shadow-sm">
                               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                               <p className="font-bold text-gray-900 dark:text-white text-lg mb-1">{t('contact.emailTitle')}</p>
                               <p className="text-gray-600 dark:text-gray-400 hover:text-gold-accent transition-colors"><a href="mailto:info@deecoffee.com">info@deecoffee.com</a></p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Business Hours */}
                   <div className="bg-[#0f291e] p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
                      {/* Decorative Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full pointer-events-none"></div>
                      
                      <h3 className="font-display text-2xl font-bold mb-6 text-gold-accent flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {t('contact.hoursTitle')}
                      </h3>
                      <ul className="space-y-4 text-sm md:text-base">
                         <li className="flex justify-between border-b border-white/10 pb-2">
                            <span className="font-medium text-gray-300">Weekdays</span>
                            <span className="font-bold">{t('contact.weekdays')}</span>
                         </li>
                         <li className="flex justify-between border-b border-white/10 pb-2">
                            <span className="font-medium text-gray-300">Saturday</span>
                            <span className="font-bold">{t('contact.saturday')}</span>
                         </li>
                         <li className="flex justify-between pt-2">
                            <span className="font-medium text-gray-300">Sunday</span>
                            <span className="text-gold-accent font-bold">{t('contact.sunday')}</span>
                         </li>
                      </ul>
                   </div>
             </Reveal>

             {/* Form Column */}
             <Reveal delay={200}>
                <div className="bg-white dark:bg-[#181818] p-8 md:p-10 rounded-2xl shadow-2xl transition-colors duration-300 relative z-10">
                   <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">
                     {t('orderPage.headline')}
                   </h3>
                   <form 
                      onSubmit={handleSubmit}
                      className="space-y-5" 
                   >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      <div className="mt-8">
                        <button 
                          type="submit"
                          disabled={loading || supabaseLoading}
                          className="w-full bg-gold-accent text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {supabaseLoading ? 'Connecting...' : (loading ? 'Submitting...' : t('orderPage.submit'))}
                        </button>
                        {supabaseError && <p className="text-red-500 mt-4 text-sm text-center">Database Error: {supabaseError}</p>}
                        {submitError && <p className="text-red-500 mt-4 text-sm text-center">{submitError}</p>}
                      </div>
                   </form>
                </div>
             </Reveal>
          </div>

          {/* Map Section */}
          <Reveal delay={300} className="mt-24">
             <div className="text-center mb-8">
                <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white">{t('contact.mapTitle')}</h3>
                <div className="h-1 w-20 bg-gold-accent mx-auto mt-4"></div>
             </div>
             
             <div className="w-full h-96 md:h-[500px] bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 relative">
                 <iframe 
                   title="Addis Ababa Map"
                   width="100%" 
                   height="100%" 
                   frameBorder="0" 
                   style={{border: 0}}
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.61332804049836!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus" 
                   allowFullScreen
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                 ></iframe>
             </div>
          </Reveal>
        </div>
      </section>
    );
}
