import App from "./App";
import { render, screen, waitFor } from '@testing-library/react';

test('App renders', async () => {
    render(<App />);
    await waitFor(() => {
        const app = screen.getByTestId('App-testID');
        expect(app).toBeTruthy();
    })
})