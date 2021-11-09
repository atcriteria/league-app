import App from "./App";
import { render, screen, waitFor } from '@testing-library/react';

describe('App testing environment', () => {
    render(<App />);

    test('App Renders', async () => {
        await waitFor(() => {
            const app = screen.getByTestId('App-testID');
            expect(app).toBeTruthy();
        });
    });
})