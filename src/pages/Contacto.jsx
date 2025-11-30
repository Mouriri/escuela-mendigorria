import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send } from 'lucide-react';

const Contacto = () => {
    const { t } = useLanguage();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Formulario enviado (simulación)');
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <h1 className="section-title">{t('contact.title')}</h1>

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="form-group">
                            <label className="form-label">{t('contact.name')}</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">{t('contact.surname')}</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="form-group">
                            <label className="form-label">{t('contact.phone')}</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">{t('contact.email')}</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group mb-6">
                        <label className="form-label">{t('contact.address')}</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl mb-8">
                        <label className="form-label text-blue-800 mb-3">{t('contact.dining_opt')}</label>
                        <div className="radio-group mb-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="dining"
                                    value="no"
                                    checked={formData.dining === 'no'}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-blue-600"
                                />
                                <span>{t('contact.no_dining')}</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="dining"
                                    value="yes"
                                    checked={formData.dining === 'yes'}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-blue-600"
                                />
                                <span>{t('contact.with_dining')}</span>
                            </label>
                        </div>

                        {formData.dining === 'yes' && (
                            <div className="animate-fade-in mt-4">
                                <label className="form-label text-sm">{t('contact.children_count')}</label>
                                <select
                                    name="childrenCount"
                                    value={formData.childrenCount}
                                    onChange={handleChange}
                                    className="form-select bg-white"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="more">{t('contact.more_than_3')}</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2 text-lg">
                        <Send size={20} />
                        {t('contact.send')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
