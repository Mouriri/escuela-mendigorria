import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600';

    const navLinks = [
        { path: '/', label: 'menu.home' },
        { path: '/quienes-somos', label: 'menu.about' },
        { path: '/colegio', label: 'menu.school' },
        { path: '/familia', label: 'menu.family' },
        { path: '/contacto', label: 'menu.contact' },
        { path: '/zona-privada', label: 'menu.private' },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <img src={logo} alt="Escuela de Mendigorría" className="h-10 md:h-12 w-auto relative z-10" />
                    </div>
                    <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'}`}>
                        Escuela de Mendigorría
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                                    ? 'text-blue-600'
                                    : scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {t(link.label)}
                        </Link>
                    ))}

                    {/* Language Selector */}
                    <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all ${scrolled ? 'bg-slate-50 border-slate-200' : 'bg-white/10 border-white/20 backdrop-blur-sm'
                        }`}>
                        <Globe size={14} className={scrolled ? 'text-slate-500' : 'text-white/80'} />
                        <button
                            onClick={() => setLanguage('es')}
                            className={`text-xs font-bold px-1 ${language === 'es' ? (scrolled ? 'text-blue-600' : 'text-white') : (scrolled ? 'text-slate-400 hover:text-slate-600' : 'text-white/60 hover:text-white/90')}`}
                        >
                            ES
                        </button>
                        <span className={`text-[10px] ${scrolled ? 'text-slate-300' : 'text-white/30'}`}>|</span>
                        <button
                            onClick={() => setLanguage('eu')}
                            className={`text-xs font-bold px-1 ${language === 'eu' ? (scrolled ? 'text-green-600' : 'text-green-300') : (scrolled ? 'text-slate-400 hover:text-slate-600' : 'text-white/60 hover:text-white/90')}`}
                        >
                            EU
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '60px' }}>
                <nav className="flex flex-col p-6 gap-2 h-full overflow-y-auto pb-20">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-lg font-medium py-4 border-b border-slate-100 ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                                }`}
                            onClick={closeMenu}
                        >
                            {t(link.label)}
                        </Link>
                    ))}

                    <div className="mt-8 p-4 bg-slate-50 rounded-xl">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Idioma / Hizkuntza</p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => { setLanguage('es'); closeMenu(); }}
                                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${language === 'es' ? 'bg-white shadow-sm text-blue-600 ring-1 ring-blue-100' : 'text-slate-500 hover:bg-white'
                                    }`}
                            >
                                Castellano
                            </button>
                            <button
                                onClick={() => { setLanguage('eu'); closeMenu(); }}
                                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${language === 'eu' ? 'bg-white shadow-sm text-green-600 ring-1 ring-green-100' : 'text-slate-500 hover:bg-white'
                                    }`}
                            >
                                Euskera
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
