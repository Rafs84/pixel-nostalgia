class PixelArt {
    constructor() {
        this.pixelSize = 20;
        this.isDrawing = false;
        this.currentColor = '#000000';
        this.templates = {
            heart: {
                name: "Heart",
                pixels: [
                    // Top curves
                    ...[2,3,6,7].map(x => ({x, y: 0, color: '#FF1493'})),
                    ...[1,2,3,4,5,6,7,8].map(x => ({x, y: 1, color: '#FF1493'})),
                    
                    // Middle section
                    ...[0,1,2,3,4,5,6,7,8,9].map(x => ({x, y: 2, color: '#FF1493'})),
                    ...[0,1,2,3,4,5,6,7,8,9].map(x => ({x, y: 3, color: '#FF1493'})),
                    ...[1,2,3,4,5,6,7,8].map(x => ({x, y: 4, color: '#FF1493'})),
                    
                    // Bottom point
                    ...[2,3,4,5,6,7].map(x => ({x, y: 5, color: '#FF1493'})),
                    ...[3,4,5,6].map(x => ({x, y: 6, color: '#FF1493'})),
                    ...[4,5].map(x => ({x, y: 7, color: '#FF1493'})),
                    
                    // Highlights
                    ...[2,3].map(x => ({x, y: 1, color: '#FFB6C1'})),
                    {x: 1, y: 2, color: '#FFB6C1'},
                    
                    // Shadows
                    ...[7,8].map(x => ({x, y: 3, color: '#DC143C'})),
                    ...[6,7].map(x => ({x, y: 4, color: '#DC143C'})),
                    ...[5,6].map(x => ({x, y: 5, color: '#DC143C'}))
                ]
            },
            ghost: {
                name: "Blinky Ghost",
                pixels: [
                    // Top curve
                    ...[2,6].map(x => ({x, y: 0, color: '#00FF00'})),
                    ...[1,2,3,4,5,6].map(x => ({x, y: 1, color: '#00FF00'})),
                    
                    // Head
                    ...[2,3,4,5,6].map(x => ({x, y: 2, color: '#00FF00'})),
                    
                    // Middle section
                    ...[1,2,3,4,5,6,7].map(x => ({x, y: 3, color: '#00FF00'})),
                    ...[0,1,3,4,5,7,8].map(x => ({x, y: 4, color: '#00FF00'})),
                    ...[0,1,2,3,4,5,6,7,8].map(x => ({x, y: 5, color: '#00FF00'})),
                    
                    // Legs
                    ...[1,2,6,7].map(x => ({x, y: 6, color: '#00FF00'})),
                    ...[0,2,6,8].map(x => ({x, y: 7, color: '#00FF00'}))
                ]
            },
            mushroom: {
                name: "Mushroom",
                pixels: [
                    // Cap top
                    ...[2,3,4,5].map(x => ({x, y: 0, color: '#FF0000'})),
                    ...[1,2,3,4,5,6].map(x => ({x, y: 1, color: '#FF0000'})),
                    ...[0,1,2,3,4,5,6,7].map(x => ({x, y: 2, color: '#FF0000'})),
                    ...[0,1,2,3,4,5,6,7].map(x => ({x, y: 3, color: '#FF0000'})),
                    
                    // Cap spots
                    {x: 2, y: 1, color: '#FFFFFF'},
                    {x: 5, y: 1, color: '#FFFFFF'},
                    {x: 1, y: 2, color: '#FFFFFF'},
                    {x: 4, y: 2, color: '#FFFFFF'},
                    {x: 6, y: 2, color: '#FFFFFF'},
                    
                    // Stem
                    ...[2,3,4,5].map(x => ({x, y: 4, color: '#FFE4B5'})),
                    ...[2,3,4,5].map(x => ({x, y: 5, color: '#FFE4B5'})),
                    ...[2,3,4,5].map(x => ({x, y: 6, color: '#FFE4B5'}))
                ]
            },
            star: {
                name: "Star",
                pixels: [
                    // Top point
                    {x: 7, y: 0, color: '#FFD700'},
                    ...[6,7,8].map(x => ({x, y: 1, color: '#FFD700'})),
                    ...[5,6,7,8,9].map(x => ({x, y: 2, color: '#FFD700'})),
                    
                    // Upper middle section
                    ...[3,4,5,6,7,8,9,10,11].map(x => ({x, y: 3, color: '#FFD700'})),
                    ...[2,3,4,5,6,7,8,9,10,11,12].map(x => ({x, y: 4, color: '#FFD700'})),
                    
                    // Middle section
                    ...[1,2,3,4,5,6,7,8,9,10,11,12,13].map(x => ({x, y: 5, color: '#FFD700'})),
                    ...[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(x => ({x, y: 6, color: '#FFD700'})),
                    
                    // Lower middle section
                    ...[2,3,4,5,6,7,8,9,10,11,12].map(x => ({x, y: 7, color: '#FFD700'})),
                    ...[3,4,5,6,7,8,9,10,11].map(x => ({x, y: 8, color: '#FFD700'})),
                    
                    // Bottom points
                    ...[4,5,6,8,9,10].map(x => ({x, y: 9, color: '#FFD700'})),
                    ...[3,4,5,9,10,11].map(x => ({x, y: 10, color: '#FFD700'})),
                    ...[2,3,4,10,11,12].map(x => ({x, y: 11, color: '#FFD700'})),
                    
                    // Highlights
                    ...[6,7,8].map(x => ({x, y: 2, color: '#FFED4A'})),
                    ...[5,6,7].map(x => ({x, y: 3, color: '#FFED4A'})),
                    {x: 4, y: 4, color: '#FFED4A'},
                    
                    // Shadows
                    ...[11,12].map(x => ({x, y: 6, color: '#DAA520'})),
                    ...[10,11].map(x => ({x, y: 7, color: '#DAA520'})),
                    ...[9,10].map(x => ({x, y: 8, color: '#DAA520'}))
                ]
            },
            invader: {
                name: "Space Invader",
                pixels: [
                    // Antenna
                    ...[2,6].map(x => ({x, y: 0, color: '#00FF00'})),
                    
                    // Top row
                    ...[3,5].map(x => ({x, y: 1, color: '#00FF00'})),
                    
                    // Head
                    ...[2,3,4,5,6].map(x => ({x, y: 2, color: '#00FF00'})),
                    
                    // Middle section
                    ...[1,2,3,4,5,6,7].map(x => ({x, y: 3, color: '#00FF00'})),
                    ...[0,1,3,4,5,7,8].map(x => ({x, y: 4, color: '#00FF00'})),
                    ...[0,1,2,3,4,5,6,7,8].map(x => ({x, y: 5, color: '#00FF00'})),
                    
                    // Legs
                    ...[1,2,6,7].map(x => ({x, y: 6, color: '#00FF00'})),
                    ...[0,2,6,8].map(x => ({x, y: 7, color: '#00FF00'}))
                ]
            },
            sword: {
                name: "Master Sword",
                pixels: [
                    // Blade Tip
                    {x: 12, y: 0, color: '#C0C0C0'},
                    ...[11,12,13].map(x => ({x, y: 1, color: '#C0C0C0'})),
                    ...[10,11,12,13,14].map(x => ({x, y: 2, color: '#C0C0C0'})),
                    
                    // Blade
                    ...[11,12,13].map(x => ({x, y: 3, color: '#C0C0C0'})),
                    ...[11,12,13].map(x => ({x, y: 4, color: '#C0C0C0'})),
                    ...[11,12,13].map(x => ({x, y: 5, color: '#C0C0C0'})),
                    ...[11,12,13].map(x => ({x, y: 6, color: '#C0C0C0'})),
                    ...[11,12,13].map(x => ({x, y: 7, color: '#C0C0C0'})),
                    ...[11,12,13].map(x => ({x, y: 8, color: '#C0C0C0'})),
                    ...[11,12,13].map(x => ({x, y: 9, color: '#C0C0C0'})),
                    ...[11,12,13].map(x => ({x, y: 10, color: '#C0C0C0'})),
                    
                    // Blade Inner Detail
                    {x: 12, y: 3, color: '#E8E8E8'},
                    {x: 12, y: 4, color: '#E8E8E8'},
                    {x: 12, y: 5, color: '#E8E8E8'},
                    {x: 12, y: 6, color: '#E8E8E8'},
                    {x: 12, y: 7, color: '#E8E8E8'},
                    {x: 12, y: 8, color: '#E8E8E8'},
                    {x: 12, y: 9, color: '#E8E8E8'},
                    {x: 12, y: 10, color: '#E8E8E8'},
                    
                    // Cross Guard
                    ...[8,9,10,11,12,13,14,15,16].map(x => ({x, y: 11, color: '#FFD700'})),
                    ...[9,10,11,12,13,14,15].map(x => ({x, y: 12, color: '#FFD700'})),
                    
                    // Grip
                    ...[11,12,13].map(x => ({x, y: 13, color: '#4169E1'})),
                    ...[11,12,13].map(x => ({x, y: 14, color: '#4169E1'})),
                    ...[11,12,13].map(x => ({x, y: 15, color: '#4169E1'})),
                    ...[11,12,13].map(x => ({x, y: 16, color: '#4169E1'})),
                    
                    // Pommel
                    ...[10,11,12,13,14].map(x => ({x, y: 17, color: '#FFD700'})),
                    ...[11,12,13].map(x => ({x, y: 18, color: '#FFD700'}))
                ]
            }
        };
        this.currentTemplate = null;
        this.width = 0;
        this.height = 0;
        this.drawingWidth = 0;  // Width of the actual drawing area
        this.drawingHeight = 0; // Height of the actual drawing area

        this.initializeCanvases();
        this.setupEventListeners();
        this.createGrid();
        this.setupTemplates();
        this.createTemplatePalette();
    }

    initializeCanvases() {
        this.pixelCanvas = document.getElementById('pixelCanvas');
        this.templateCanvas = document.getElementById('templateCanvas');
        
        this.pixelCtx = this.pixelCanvas.getContext('2d', { willReadFrequently: true });
        this.templateCtx = this.templateCanvas.getContext('2d', { willReadFrequently: true });

        this.resizeCanvases();
        window.addEventListener('resize', () => this.resizeCanvases());
    }

    resizeCanvases() {
        this.width = Math.floor(window.innerWidth / this.pixelSize) * this.pixelSize;
        this.height = Math.floor(window.innerHeight / this.pixelSize) * this.pixelSize;

        this.pixelCanvas.width = this.width;
        this.pixelCanvas.height = this.height;
        this.templateCanvas.width = this.width;
        this.templateCanvas.height = this.height;

        this.createGrid();
    }

    createGrid() {
        // Fill with white background
        this.pixelCtx.fillStyle = '#ffffff';
        this.pixelCtx.fillRect(0, 0, this.width, this.height);
        
        // Draw grid
        this.pixelCtx.strokeStyle = '#e0e0e0';
        this.pixelCtx.lineWidth = 0.5;

        for (let x = 0; x <= this.width; x += this.pixelSize) {
            this.pixelCtx.beginPath();
            this.pixelCtx.moveTo(x, 0);
            this.pixelCtx.lineTo(x, this.height);
            this.pixelCtx.stroke();
        }

        for (let y = 0; y <= this.height; y += this.pixelSize) {
            this.pixelCtx.beginPath();
            this.pixelCtx.moveTo(0, y);
            this.pixelCtx.lineTo(this.width, y);
            this.pixelCtx.stroke();
        }
    }

    setupEventListeners() {
        this.pixelCanvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.pixelCanvas.addEventListener('mousemove', (e) => this.draw(e));
        this.pixelCanvas.addEventListener('mouseup', () => this.stopDrawing());
        this.pixelCanvas.addEventListener('mouseleave', () => this.stopDrawing());

        document.getElementById('colorPicker').addEventListener('input', (e) => {
            this.currentColor = e.target.value;
        });

        document.getElementById('templateBtn').addEventListener('click', () => {
            const modal = document.getElementById('templateModal');
            modal.style.display = 'block';
            this.openTemplateModal();
        });

        document.getElementById('clearBtn').addEventListener('click', () => this.clearCanvas());
        
        document.getElementById('exportBtn').addEventListener('click', () => {
            document.getElementById('exportModal').style.display = 'block';
        });

        // Close buttons for modals
        document.querySelectorAll('.modal .close').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                closeBtn.closest('.modal').style.display = 'none';
            });
        });

        // Export buttons
        document.querySelectorAll('.export-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const format = e.target.dataset.format;
                if (format === 'png') {
                    this.exportToPNG();
                } else {
                    this.exportImage(format);
                }
                document.getElementById('exportModal').style.display = 'none';
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'r') {
                this.clearCanvas();
            }
        });
    }

    getPixelCoords(e) {
        const rect = this.pixelCanvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / this.pixelSize) * this.pixelSize;
        const y = Math.floor((e.clientY - rect.top) / this.pixelSize) * this.pixelSize;
        return { x, y };
    }

    startDrawing(e) {
        this.isDrawing = true;
        this.togglePixel(e);
    }

    draw(e) {
        if (!this.isDrawing) return;
        const coords = this.getPixelCoords(e);
        
        // Draw the pixel
        this.pixelCtx.fillStyle = this.currentColor;
        this.pixelCtx.fillRect(coords.x, coords.y, this.pixelSize, this.pixelSize);
        
        // Redraw grid lines for this pixel
        this.pixelCtx.strokeStyle = '#e0e0e0';
        this.pixelCtx.lineWidth = 0.5;
        this.pixelCtx.strokeRect(coords.x, coords.y, this.pixelSize, this.pixelSize);
    }

    togglePixel(e) {
        const coords = this.getPixelCoords(e);
        const imageData = this.pixelCtx.getImageData(coords.x, coords.y, 1, 1).data;
        const isWhite = imageData[0] === 255 && imageData[1] === 255 && imageData[2] === 255;

        // Set color based on current state
        this.pixelCtx.fillStyle = isWhite ? this.currentColor : '#ffffff';
        this.pixelCtx.fillRect(coords.x, coords.y, this.pixelSize, this.pixelSize);

        // Redraw grid lines for this pixel
        this.pixelCtx.strokeStyle = '#e0e0e0';
        this.pixelCtx.lineWidth = 0.5;
        this.pixelCtx.strokeRect(coords.x, coords.y, this.pixelSize, this.pixelSize);
    }

    stopDrawing() {
        this.isDrawing = false;
    }

    clearCanvas() {
        this.pixelCtx.clearRect(0, 0, this.width, this.height);
        this.templateCtx.clearRect(0, 0, this.width, this.height);
        this.createGrid();
        this.updateTemplatePalette(null);
    }

    setupTemplates() {
        // No changes
    }

    createTemplatePalette() {
        const palette = document.createElement('div');
        palette.id = 'template-palette';
        palette.style.cssText = `
            position: absolute;
            right: 20px;
            top: 60px;
            background: #2a2a2a;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 10px;
            display: none;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        `;

        const title = document.createElement('div');
        title.textContent = 'Template Colors';
        title.style.cssText = `
            color: #fff;
            font-size: 14px;
            margin-bottom: 8px;
            text-align: center;
        `;
        palette.appendChild(title);

        const colorsContainer = document.createElement('div');
        colorsContainer.id = 'template-colors';
        colorsContainer.style.cssText = `
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5px;
        `;
        palette.appendChild(colorsContainer);

        document.body.appendChild(palette);
        return palette;
    }

    updateTemplatePalette(template) {
        const palette = document.getElementById('template-palette');
        const colorsContainer = document.getElementById('template-colors');
        colorsContainer.innerHTML = '';

        if (!template) {
            palette.style.display = 'none';
            return;
        }

        // Extract unique colors from template
        const colors = [...new Set(template.pixels.map(pixel => pixel.color))];
        
        colors.forEach(color => {
            const colorButton = document.createElement('div');
            colorButton.style.cssText = `
                width: 30px;
                height: 30px;
                background-color: ${color};
                border-radius: 4px;
                cursor: pointer;
                border: 1px solid #444;
                transition: transform 0.1s;
            `;
            colorButton.addEventListener('click', () => {
                this.currentColor = color;
                // Add visual feedback
                colorButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    colorButton.style.transform = 'scale(1)';
                }, 100);
            });
            colorButton.title = color;
            colorsContainer.appendChild(colorButton);
        });

        palette.style.display = 'block';
    }

    openTemplateModal() {
        const templateGrid = document.querySelector('.template-grid');
        templateGrid.innerHTML = '';

        Object.entries(this.templates).forEach(([key, template]) => {
            const option = document.createElement('div');
            option.className = 'template-option';
            
            // Create preview container
            const previewContainer = document.createElement('div');
            previewContainer.className = 'template-preview';
            
            // Create thumbnail canvas
            const thumbnailCanvas = document.createElement('canvas');
            thumbnailCanvas.width = 160;
            thumbnailCanvas.height = 160;
            const thumbCtx = thumbnailCanvas.getContext('2d');
            
            // Clear canvas with white background
            thumbCtx.fillStyle = '#ffffff';
            thumbCtx.fillRect(0, 0, 160, 160);
            
            // Find template dimensions
            let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
            template.pixels.forEach(pixel => {
                minX = Math.min(minX, pixel.x);
                maxX = Math.max(maxX, pixel.x);
                minY = Math.min(minY, pixel.y);
                maxY = Math.max(maxY, pixel.y);
            });
            
            const templateWidth = maxX - minX + 1;
            const templateHeight = maxY - minY + 1;
            const scale = Math.min(120 / templateWidth, 120 / templateHeight);
            
            // Center the template in thumbnail
            const offsetX = (160 - (templateWidth * scale)) / 2;
            const offsetY = (160 - (templateHeight * scale)) / 2;
            
            // Draw template pixels
            template.pixels.forEach(pixel => {
                thumbCtx.fillStyle = pixel.color;
                thumbCtx.fillRect(
                    offsetX + ((pixel.x - minX) * scale),
                    offsetY + ((pixel.y - minY) * scale),
                    scale - 1,
                    scale - 1
                );
            });

            // Add template name
            const templateName = document.createElement('div');
            templateName.className = 'template-name';
            templateName.textContent = template.name;

            // Assemble the elements
            previewContainer.appendChild(thumbnailCanvas);
            option.appendChild(previewContainer);
            option.appendChild(templateName);
            templateGrid.appendChild(option);
            
            option.addEventListener('click', () => {
                this.applyTemplate(key);
                this.updateTemplatePalette(this.templates[key]);
                document.getElementById('templateModal').style.display = 'none';
            });
        });
    }

    applyTemplate(templateName) {
        const template = this.templates[templateName];
        if (!template) return;

        this.templateCtx.clearRect(0, 0, this.width, this.height);
        
        // Find template dimensions
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        template.pixels.forEach(pixel => {
            minX = Math.min(minX, pixel.x);
            maxX = Math.max(maxX, pixel.x);
            minY = Math.min(minY, pixel.y);
            maxY = Math.max(maxY, pixel.y);
        });
        
        const templateWidth = (maxX - minX + 1) * this.pixelSize;
        const templateHeight = (maxY - minY + 1) * this.pixelSize;
        
        // Calculate center position, ensuring alignment with pixel grid
        const startX = Math.floor((this.width - templateWidth) / (2 * this.pixelSize)) * this.pixelSize;
        const startY = Math.floor((this.height - templateHeight) / (2 * this.pixelSize)) * this.pixelSize;

        // Draw template
        this.templateCtx.globalAlpha = 0.5;
        template.pixels.forEach(pixel => {
            this.templateCtx.fillStyle = pixel.color;
            this.templateCtx.fillRect(
                startX + (pixel.x - minX) * this.pixelSize,
                startY + (pixel.y - minY) * this.pixelSize,
                this.pixelSize,
                this.pixelSize
            );
        });
        this.templateCtx.globalAlpha = 1;
    }

    exportToPNG() {
        // Create a temporary canvas with the exact pixel dimensions
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = this.width;
        tempCanvas.height = this.height;
        const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });

        // Make sure we have a transparent background
        tempCtx.clearRect(0, 0, this.width, this.height);

        // Draw the pixel art
        tempCtx.drawImage(this.pixelCanvas, 0, 0);

        // Get the canvas data to find the bounds of drawn pixels
        const imageData = tempCtx.getImageData(0, 0, this.width, this.height);
        const data = imageData.data;
        
        // Find the bounds of the colored pixels
        let minX = this.width;
        let minY = this.height;
        let maxX = 0;
        let maxY = 0;
        let hasColoredPixels = false;

        // Check each pixel in the canvas
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const i = (y * this.width + x) * 4;
                // Check if pixel is not white (RGB values not all 255)
                if (data[i] !== 255 || data[i + 1] !== 255 || data[i + 2] !== 255) {
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                    hasColoredPixels = true;
                }
            }
        }

        if (!hasColoredPixels) {
            alert('No pixels to export! Draw something first.');
            return;
        }

        // Create the final canvas with the cropped dimensions
        const finalCanvas = document.createElement('canvas');
        const width = maxX - minX + 1;
        const height = maxY - minY + 1;
        finalCanvas.width = width;
        finalCanvas.height = height;
        const finalCtx = finalCanvas.getContext('2d', { willReadFrequently: true });

        // Draw the cropped region
        finalCtx.drawImage(
            tempCanvas,
            minX, minY,
            width, height,
            0, 0,
            width, height
        );

        // Create download link
        const link = document.createElement('a');
        link.download = 'pixel-art.png';
        link.href = finalCanvas.toDataURL('image/png');
        link.click();
    }

    exportImage(format) {
        if (format === 'svg') {
            this.exportToSVG();
            return;
        }

        // For other formats (jpg)
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });
        tempCanvas.width = this.width;
        tempCanvas.height = this.height;

        // Draw white background for jpg
        tempCtx.fillStyle = '#ffffff';
        tempCtx.fillRect(0, 0, this.width, this.height);

        // Draw the pixel art
        tempCtx.drawImage(this.pixelCanvas, 0, 0);

        // Create download link
        const link = document.createElement('a');
        link.download = `pixel-art.${format}`;
        link.href = tempCanvas.toDataURL(`image/${format}`);
        link.click();
    }

    exportToSVG() {
        // Get the canvas data
        const ctx = this.pixelCtx;
        const imageData = ctx.getImageData(0, 0, this.width, this.height);
        const data = imageData.data;
        
        // Find the bounds of the non-white pixels
        let minX = this.width;
        let minY = this.height;
        let maxX = 0;
        let maxY = 0;
        let hasColoredPixels = false;

        // Check each pixel in the canvas
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const i = (y * this.width + x) * 4;
                // Check if pixel is not white (RGB values not all 255)
                if (data[i] !== 255 || data[i + 1] !== 255 || data[i + 2] !== 255) {
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                    hasColoredPixels = true;
                }
            }
        }

        if (!hasColoredPixels) {
            alert('No pixels to export! Draw something first.');
            return;
        }

        console.log('Bounds:', { minX, minY, maxX, maxY });
        
        // Add a 1-pixel padding
        minX = Math.max(0, minX - 1);
        minY = Math.max(0, minY - 1);
        maxX = Math.min(this.width - 1, maxX + 1);
        maxY = Math.min(this.height - 1, maxY + 1);

        // Calculate dimensions
        const width = maxX - minX + 1;
        const height = maxY - minY + 1;

        // Create SVG content
        let svgContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;

        // Add colored pixels to SVG
        for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
                const i = (y * this.width + x) * 4;
                if (data[i] !== 255 || data[i + 1] !== 255 || data[i + 2] !== 255) {
                    const color = `rgb(${data[i]}, ${data[i + 1]}, ${data[i + 2]})`;
                    svgContent += `<rect x="${x - minX}" y="${y - minY}" width="1" height="1" fill="${color}" />`;
                }
            }
        }

        svgContent += '</svg>';

        // Create download link with SVG content
        const link = document.createElement('a');
        link.download = 'pixel-art.svg';
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    }
}

// Initialize when the page loads
window.addEventListener('load', () => {
    new PixelArt();
});