// CommonJS
const pdf = require('pdf-creator-node');
const fs = require('fs');
const path = require('path');

async function createPDF() {
    // Read HTML template
    const html = fs.readFileSync(path.join(__dirname, '96_template.html'), 'utf8');

    // Sample data
    const users = [
        { name: 'John Doe', age: 30, email: 'john@example.com' },
        { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
    ];

    // PDF options
    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm',
        header: {
            height: '15mm',
            contents:
                '<div style="text-align: center;">Confidential Report</div>'
        },
        footer: {
            height: '15mm',
            contents: {
                default:
                    '<div style="text-align: center; color: #666;">Page {{page}} of {{pages}}</div>'
            }
        }
    };

    // Document configuration
    const document = {
        html: html,
        data: {
            users: users,
            date: new Date().toLocaleDateString()
        },
        path: './user-report.pdf',
        type: 'pdf'
    };

    // Generate PDF
    try {
        const result = await pdf.create(document, options);
        console.log('PDF generated successfully:', result.filename);
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

createPDF();