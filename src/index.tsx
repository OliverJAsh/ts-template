import { createRoot } from 'react-dom/client';

const App = () => 'foo';

createRoot(document.getElementById('root')!).render(<App />);
