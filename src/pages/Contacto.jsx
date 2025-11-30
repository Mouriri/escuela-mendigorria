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
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Mail className="w-4 h-4" />
                        Estamos Aquí
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('contact.title')}</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        ¿Tienes preguntas? Nos encantaría escucharte
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <User className="w-5 h-5 text-blue-500" />
                                    {t('contact.name')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                    placeholder="Juan"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <User className="w-5 h-5 text-blue-500" />
                                    {t('contact.surname')}
                                </label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                    placeholder="García"
                                    required
                                />
                            </div>
                        </div>

                        {/* Contact Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <Phone className="w-5 h-5 text-green-500" />
                                    {t('contact.phone')}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                    placeholder="+34 600 000 000"
                                    required
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <Mail className="w-5 h-5 text-purple-500" />
                                    {t('contact.email')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                    placeholder="ejemplo@email.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-8">
                            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                <Home className="w-5 h-5 text-orange-500" />
                                {t('contact.address')}
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                placeholder="Calle Mayor, 1"
                                required
                            />
                        </div>

                        {/* Dining Options */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8 border-2 border-blue-100">
                            <label className="text-blue-900 font-bold text-lg mb-4 block">
                                {t('contact.dining_opt')}
                            </label>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <label className="flex items-center gap-3 cursor-pointer bg-white px-6 py-4 rounded-xl hover:shadow-md transition-all border-2 border-transparent has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                                    <input
                                        type="radio"
                                        name="dining"
                                        value="no"
                                        checked={formData.dining === 'no'}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="font-semibold text-gray-700">{t('contact.no_dining')}</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer bg-white px-6 py-4 rounded-xl hover:shadow-md transition-all border-2 border-transparent has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50">
                                    <input
                                        type="radio"
                                        name="dining"
                                        value="yes"
                                        checked={formData.dining === 'yes'}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="font-semibold text-gray-700">{t('contact.with_dining')}</span>
                                </label>
                            </div>

                            {formData.dining === 'yes' && (
                                <div className="animate-fade-in bg-white p-6 rounded-xl border-2 border-blue-200">
                                    <label className="text-gray-700 font-semibold mb-3 block">
                                        {t('contact.children_count')}
                                    </label>
                                    <select
                                        name="childrenCount"
                                        value={formData.childrenCount}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
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
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold px-8 py-5 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin w-6 h-6" />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Send className="w-6 h-6" />
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
