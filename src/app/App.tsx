import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { LoaderPage } from 'pages/LoaderPage';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback={<LoaderPage />}>
            <Navbar />

            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
