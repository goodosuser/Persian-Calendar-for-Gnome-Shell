function iranSolar() {
    this._init();
};

iranSolar.prototype = {
    name: 'مناسبت‌های رسمی ایران',
    events: [
        [1, 'عید نوروز', true],
        [2, 'عید نوروز', true],
        [3, 'عید نوروز', true],
        [4, 'عید نوروز', true],
        [12, 'روز جمهوری اسلامی', true],
        [13, 'روز طبیعت', true],
        [76, 'رحلت امام خمینی', true],
        [77, 'قیام خونین ۱۵ خرداد', true],
        [100, 'شهادت دکتر بهشتی', false],
        [132, 'روز مبارزه با تروریسم', false],
        [135, 'روز صنعت چاپ', false],
        [276, 'شب یلدا', false],
        [328, 'پیروزی انقلاب اسلامی', true],
        [365, 'روز ملی شدن صنعت نفت', true]
    ],
    
    _init: function() {
    }
}
