import React from "react";
import { AppRoute } from "../settings.js";
import { InitialPage } from "../components/InitialPage.jsx";
import { GamePage } from "../components/GamePage.jsx";
import { ResultsPage } from "../components/ResultsPage.jsx";

function App({ results, getImages }) {
    const [page, setPage] = React.useState(AppRoute.Initial);
    const [result, setResult] = React.useState(0);
    const [images, setImages] = React.useState([]);
    const [theme, setTheme] = React.useState('');
    // TODO: добавьте состояние текущего набора карточек

    const showResults = (stepsCount) => {
        setResult(stepsCount);
        setPage(AppRoute.Results);
    };
    const handleReset = () => {
        setPage(AppRoute.Initial);
    };

    const getTheme = (theme) => {
        switch (theme) {
            case "flowers":
                setTheme('cards-theme-flowers');
                break;
            case "cars":
                setTheme('cards-theme-cars')
                break;
            default:
                setTheme('');
                break;
        }
    }

    const handleStart = (type) => {
        setImages(getImages(type));
        setPage(AppRoute.Game);
        getTheme(type);
    };

    const getPage = (route) => {
        switch (route) {
            case AppRoute.Initial:
                return <InitialPage onStart={handleStart} />;
            case AppRoute.Game:
                return <GamePage images={images} theme={theme} onShowResults={showResults} />;
            case AppRoute.Results:
                return (
                    <ResultsPage
                        stepsCount={result}
                        onResetGame={handleReset}
                        results={results}
                    />
                );
            default:
                return null;
        }
    };
    return getPage(page);
}


export {App};