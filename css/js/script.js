// يمكنك إضافة أي تفاعلات تحتاجها هنا
document.addEventListener('DOMContentLoaded', function() {
    // كود الجافاسكريبت سيكون هنا
    console.log('تم تحميل الموقع بنجاح');
    
    // مثال: إضافة تاريخ اليوم إلى الأخبار
    const newsDates = document.querySelectorAll('.news-meta span:first-child');
    const today = new Date();
    const options = { hour: '2-digit', minute: '2-digit' };
    
    newsDates.forEach(date => {
        date.textContent = `اليوم ${today.toLocaleTimeString('ar-YE', options)}`;
    });
    
    // تنبيه عند زيارة صفحة الأخبار العاجلة
    if (window.location.pathname.includes('news.html')) {
        alert('تنبيه: هذا خبر عاجل يرجى قراءته بعناية');
    }
});
