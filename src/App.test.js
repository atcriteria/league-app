import App from "./App";
import { render, screen} from '@testing-library/react';

describe('App testing environment', () => {
    beforeEach(() => {
        render(<App />);
    });
    
    it('App Renders', () => {
        const mainApp = screen.getByTestId('App-testID');
        expect(mainApp).toBeTruthy();
    });
    it('Header Renders', () => {
        const header = screen.getByTestId('header-testID');
        expect(header).toBeTruthy();
    });
    it('About Renders', () => {
        const about = screen.getByTestId('about-testID');
        expect(about).toBeTruthy();
    });
    it('Banner Renders', () => {
        const banner = screen.getByTestId('banner-testID');
        expect(banner).toBeTruthy();
    });
    it('Champions Renders', () => {
        const champions = screen.getByTestId('champions-testID');
        expect(champions).toBeTruthy();
    });
});