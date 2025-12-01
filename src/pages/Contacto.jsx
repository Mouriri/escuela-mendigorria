import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, Loader2, Mail, Phone, MapPin, User, Home } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contacto = () => {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        address: '',
        dining: 'no',
        childrenCount: '1'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                createdAt: serverTimestamp()
            });
            alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
            setFormData({
                name: '',
                surname: '',
                phone: '',
                email: '',
                address: '',
                dining: 'no',
                childrenCount: '1'
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-8">
                        <Mail className="w-4 h-4" />
                        Estamos Aquí
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{t('contact.title')}</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        ¿Tienes preguntas? Nos encantaría escucharte y ayudarte en lo que necesites.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                                    {t('contact.name')}
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-800"
                                        placeholder="Juan"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                                    {t('contact.surname')}
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-800"
                                        placeholder="García"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                                    {t('contact.phone')}
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-800"
                                        placeholder="+34 600 000 000"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                                    {t('contact.email')}
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-800"
                                        placeholder="ejemplo@email.com"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-10">
                            <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                                {t('contact.address')}
                            </label>
                            <div className="relative">
                                <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-800"
                                    placeholder="Calle Mayor, 1"
                                    required
                                />
                            </div>
                        </div>

                        {/* Dining Options */}
                        <div className="bg-blue-50/50 p-8 rounded-xl mb-10 border border-blue-100">
                            <label className="text-slate-800 font-bold text-lg mb-6 block">
                                {t('contact.dining_opt')}
                            </label>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <label className="flex items-center gap-3 cursor-pointer bg-white px-6 py-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                                    <input
                                        type="radio"
                                        name="dining"
                                        value="no"
                                        checked={formData.dining === 'no'}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="font-semibold">{t('contact.no_dining')}</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer bg-white px-6 py-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                                    <input
                                        type="radio"
                                        name="dining"
                                        value="yes"
                                        checked={formData.dining === 'yes'}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="font-semibold">{t('contact.with_dining')}</span>
                                </label>
                            </div>

                            {formData.dining === 'yes' && (
                                <div className="animate-fade-in bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                    <label className="text-slate-700 font-semibold mb-3 block text-sm">
                                        {t('contact.children_count')}
                                    </label>
                                    <select
                                        name="childrenCount"
                                        value={formData.childrenCount}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white text-slate-800"
                                    >
                                        <option value="1">1 niño</option>
                                        <option value="2">2 niños</option>
                                        <option value="3">3 niños</option>
                                        <option value="more">{t('contact.more_than_3')}</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin w-5 h-5" />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    {t('contact.send')}
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
