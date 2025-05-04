import { jsPDF } from 'jspdf';

export const generateCertificate = (userName, courseName, completionDate) => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });


  // Настройка шрифтов
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(40);
  doc.setTextColor(44, 62, 80);

  // Заголовок
  doc.text('Certificate of Completion', 148.5, 50, { align: 'center' });

  // Имя пользователя
  doc.setFontSize(30);
  doc.text(userName, 148.5, 80, { align: 'center' });

  // Текст сертификата
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text('has successfully completed the course', 148.5, 100, { align: 'center' });

  // Название курса
  doc.setFont('helvetica', 'bold');
  doc.text(courseName, 148.5, 115, { align: 'center' });

  // Дата
  doc.setFont('helvetica', 'normal');
  doc.text(`Date: ${completionDate}`, 148.5, 140, { align: 'center' });

  // Подпись
  doc.setFontSize(12);
  doc.text('Course Instructor', 148.5, 170, { align: 'center' });

  // Сохраняем PDF
  doc.save(`certificate_${userName.replace(/\s+/g, '_')}.pdf`);
}; 