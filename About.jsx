import React from 'react';

const About = () => {
    return (
        <div className="container animate-fade-in" style={{ paddingTop: '4rem', maxWidth: '800px' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Study AI</h1>
            <div className="glass-panel" style={{ padding: '2rem' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Study AI is designed to revolutionize how students interact with educational content. By combining the vast library of YouTube with the power of Artificial Intelligence, we create an interactive learning environment.
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Simply paste a link, and our AI assistant will watch the video with you, ready to answer questions, summarize key points, and clarify complex topics in real-time.
                </p>
                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    <h3 style={{ color: 'var(--accent-primary)' }}>Features</h3>
                    <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--success)' }}>✓</span> Real-time Q&A
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--success)' }}>✓</span> Multi-model support (ChatGPT / Gemini)
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--success)' }}>✓</span> Distraction-free interface
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
