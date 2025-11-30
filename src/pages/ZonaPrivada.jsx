import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { Lock, User, LogOut, GraduationCap, BookOpen } from 'lucide-react';

const ZonaPrivada = () => {
    const { t } = useLanguage();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('student'); // 'student' or 'teacher' (mocked for demo)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // In a real app, you would fetch the user's role from Firestore or Custom Claims here
            // For demo purposes, we keep the default 'student' or let user toggle it
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
            // For demo purposes, if config is invalid, we might want to simulate login
            if (err.code === 'auth/invalid-api-key' || err.code === 'auth/configuration-not-found') {
                setError('Firebase not configured. (Demo mode: check console)');
                // Simulate login for demo
                setUser({ email: email });
            } else {
                setError('Error: ' + err.message);
            }
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (err) {
            setUser(null); // Force logout in demo
        }
    };

    const handleForgotPassword = async () => {
        if (!email) return setError('Please enter your email first');
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent!');
        } catch (err) {
            setError(err.message);
        }
    };

    if (user) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="section-title text-left">{t('private.title')}</h1>
                    <button onClick={handleLogout} className="btn bg-red-500 text-white flex items-center gap-2">
                        <LogOut size={18} /> Salir
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-full ${role === 'student' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                            {role === 'student' ? <GraduationCap size={32} /> : <BookOpen size={32} />}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Bienvenido, {user.email}</h2>
                            <p className="text-gray-500">Rol: {role === 'student' ? t('private.student') : t('private.teacher')}</p>
                        </div>
                    </div>

                    {/* Role Toggle for Demo */}
                    <div className="mb-6 p-4 bg-yellow-50 rounded border border-yellow-200">
                        <p className="text-sm text-yellow-800 mb-2 font-bold">Demo Control: Switch Role</p>
                        <div className="flex gap-4">
                            <button onClick={() => setRole('student')} className={`px-3 py-1 rounded ${role === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Alumno</button>
                            <button onClick={() => setRole('teacher')} className={`px-3 py-1 rounded ${role === 'teacher' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>Profesor</button>
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {role === 'student' ? (
                            <>
                                <DashboardCard title="Mis Notas" color="bg-blue-50" />
                                <DashboardCard title="Horario" color="bg-blue-50" />
                                <DashboardCard title="Tareas" color="bg-blue-50" />
                            </>
                        ) : (
                            <>
                                <DashboardCard title="Gestionar Alumnos" color="bg-green-50" />
                                <DashboardCard title="Subir Notas" color="bg-green-50" />
                                <DashboardCard title="Calendario Docente" color="bg-green-50" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-glass border border-gray-100">
                <div className="text-center mb-8">
                    <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                        <Lock size={32} className="text-blue-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">{t('private.title')}</h1>
                    <p className="text-gray-500">Acceso seguro para la comunidad educativa</p>
                </div>

                {error && <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label className="form-label">{t('private.email')}</label>
                        <div className="relative">
                            <User size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input pl-10"
                                placeholder="nombre@ejemplo.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">{t('private.password')}</label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input pl-10"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <div className="text-right mb-6">
                        <button type="button" onClick={handleForgotPassword} className="text-sm text-blue-500 hover:underline">
                            {t('private.forgot_password')}
                        </button>
                    </div>

                    <button type="submit" className="btn btn-primary w-full shadow-lg hover:shadow-xl">
                        {t('private.login')}
                    </button>
                </form>
            </div>
        </div>
    );
};

const DashboardCard = ({ title, color }) => (
    <div className={`p-6 rounded-xl ${color} hover:shadow-md transition-all cursor-pointer h-32 flex items-center justify-center`}>
        <h3 className="text-xl font-bold text-gray-700">{title}</h3>
    </div>
);

export default ZonaPrivada;
