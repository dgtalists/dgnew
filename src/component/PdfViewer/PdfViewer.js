'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`;

const PdfToImageViewer = ({ url }) => {
    const containerRef = useRef();
    const [error, setError] = useState(null);

    useEffect(() => {
        const renderPdfAsImages = async () => {
            try {
                const pdf = await getDocument(url).promise;

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 1.5 });
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    await page.render({ canvasContext: context, viewport }).promise;

                    const img = document.createElement('img');
                    img.src = canvas.toDataURL();
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.objectFit = 'contain';
                    img.style.display = 'block';
                    img.style.marginBottom = '0';

                    // Protection
                    img.setAttribute('draggable', false);
                    img.style.userSelect = 'none';
                    img.style.pointerEvents = 'none';

                    containerRef.current.appendChild(img);
                }
            } catch (err) {
                setError('Failed to render PDF');
                console.error(err);
            }
        };

        containerRef.current.innerHTML = '';
        renderPdfAsImages();

        // 🔒 Block right-click, copy, dev tools
        const handleContextMenu = (e) => e.preventDefault();
        const handleKeyDown = (e) => {
            const blocked =
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && ['I', 'C'].includes(e.key.toUpperCase())) ||
                (e.ctrlKey && ['U', 'S'].includes(e.key.toUpperCase()));
            if (blocked) {
                e.preventDefault();
                e.stopPropagation();
            }
        };
        const handleCopy = (e) => e.preventDefault();

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('copy', handleCopy);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('copy', handleCopy);
        };
    }, [url]);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div ref={containerRef} className="pdf-image-scroll-container"></div>
        </div>
    );
};

export default PdfToImageViewer;
