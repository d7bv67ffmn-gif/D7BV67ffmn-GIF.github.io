// 获取所有需要渐入的图片、文字区块
const fadeElements = document.querySelectorAll('.scroll-fade');
const header = document.querySelector('.header');

function checkScrollAnim() {
    fadeElements.forEach(item => {
        // 获取元素距离视口顶部的距离
        const itemTop = item.getBoundingClientRect().top;
        // 元素还差120px进入屏幕时就开始缓慢动画，体验顺滑
        const triggerPoint = window.innerHeight - 120;

        if (itemTop < triggerPoint) {
            item.classList.add('show');
        }
    })

    // 导航栏滚动样式切换
    if(window.scrollY > 60) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

// 页面滚动、窗口大小改变、页面加载全部执行检测
window.addEventListener('scroll', checkScrollAnim);
window.addEventListener('resize', checkScrollAnim);
window.addEventListener('load', checkScrollAnim);