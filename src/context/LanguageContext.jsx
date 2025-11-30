import React, { createContext, useState, useContext } from 'react';

const translations = {
    es: {
        menu: {
            home: 'Inicio',
            about: 'Quiénes somos',
            school: 'Colegio',
            family: 'Familia',
            contact: 'Contacto',
            private: 'Zona privada',
        },
        home: {
            welcome: 'Bienvenidos a la Escuela de Mendigorría',
            about_desc: 'Conoce nuestra historia y valores.',
            school_desc: 'Un proyecto educativo innovador.',
            family_desc: 'Información para padres y alumnos.',
            activities: 'Actividades',
            activities_desc: 'Talleres, excursiones y más.',
            dining: 'El comedor',
            dining_desc: 'Alimentación saludable y equilibrada.',
        },
        about: {
            title: 'Quiénes somos',
            content: '(Texto pendiente de completar)',
        },
        school: {
            title: 'Nuestro Colegio',
            project: 'Proyecto Educativo',
            facilities: 'Instalaciones',
            methodology: 'Metodología',
            services: 'Servicios Complementarios',
        },
        family: {
            title: 'Familia y AMPA',
            info: 'Información para familias',
            downloads: 'Documentos descargables',
            channels: 'Canales de comunicación',
        },
        contact: {
            title: 'Contacto',
            name: 'Nombre',
            surname: 'Apellido',
            phone: 'Teléfono',
            email: 'Email',
            address: 'Dirección',
            dining_opt: 'Servicio de Comedor',
            no_dining: 'Sin comedor',
            with_dining: 'Con comedor',
            children_count: 'Número de niños',
            more_than_3: 'Más de 3',
            send: 'Enviar',
        },
        private: {
            title: 'Zona Privada',
            student: 'Alumno',
            teacher: 'Profesor',
            login_student: 'Acceso Alumnos',
            login_teacher: 'Acceso Profesores',
            email: 'Correo electrónico',
            password: 'Contraseña',
            login: 'Entrar',
            forgot_password: '¿Olvidaste tu contraseña?',
        },
        footer: {
            phone: 'Teléfono',
            email: 'Email',
            address: 'Dirección',
        }
    },
    eu: {
        menu: {
            home: 'Hasiera',
            about: 'Nor gara',
            school: 'Eskola',
            family: 'Familia',
            contact: 'Harremana',
            private: 'Gune pribatua',
        },
        home: {
            welcome: 'Ongi etorri Mendigorriko Eskolara',
            about_desc: 'Ezagutu gure historia eta balioak.',
            school_desc: 'Hezkuntza proiektu berritzailea.',
            family_desc: 'Guraso eta ikasleentzako informazioa.',
            activities: 'Jarduerak',
            activities_desc: 'Tailerrak, irteerak eta gehiago.',
            dining: 'Jantokia',
            dining_desc: 'Elikadura osasuntsua eta orekatua.',
        },
        about: {
            title: 'Nor gara',
            content: '(Osatzeko dagoen testua)',
        },
        school: {
            title: 'Gure Eskola',
            project: 'Hezkuntza Proiektua',
            facilities: 'Instalazioak',
            methodology: 'Metodologia',
            services: 'Zerbitzu Osagarriak',
        },
        family: {
            title: 'Familia eta IGE',
            info: 'Familientzako informazioa',
            downloads: 'Deskargatzeko dokumentuak',
            channels: 'Komunikazio bideak',
        },
        contact: {
            title: 'Harremana',
            name: 'Izena',
            surname: 'Abizena',
            phone: 'Telefonoa',
            email: 'Posta elektronikoa',
            address: 'Helbidea',
            dining_opt: 'Jantoki Zerbitzua',
            no_dining: 'Jantokirik gabe',
            with_dining: 'Jantokiarekin',
            children_count: 'Haur kopurua',
            more_than_3: '3 baino gehiago',
            send: 'Bidali',
        },
        private: {
            title: 'Gune Pribatua',
            student: 'Ikaslea',
            teacher: 'Irakaslea',
            login_student: 'Ikasleen Sarrera',
            login_teacher: 'Irakasleen Sarrera',
            email: 'Posta elektronikoa',
            password: 'Pasahitza',
            login: 'Sartu',
            forgot_password: 'Pasahitza ahaztu duzu?',
        },
        footer: {
            phone: 'Telefonoa',
            email: 'Posta',
            address: 'Helbidea',
        }
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const t = (path) => {
        const keys = path.split('.');
        let value = translations[language];
        for (let key of keys) {
            value = value[key];
            if (!value) return path;
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
