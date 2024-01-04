export default async function Page() {

    return (
        <main>
            <div
                className="flex justify-center items-center h-screen"
                style={{
                    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
                }}
            >
                <div
                    className="bg-white border rounded p-8 shadow-md"
                    style={{ maxWidth: '400px' }}
                >
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Benutzername:
                        </label>
                        <input
                            type="text" 
                            id="username"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Passwort:
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                        Einloggen
                    </button>
                </div>
            </div>
        </main>
    );
}