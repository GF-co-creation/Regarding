// 粒子动画增强
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.position = 'fixed';
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    // Always use current window size
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    particle.style.left = Math.random() * currentWidth + 'px';
    particle.style.top = currentHeight + 'px';
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(-${currentHeight + 100}px) rotate(720deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'linear'
    });
    
    animation.onfinish = () => particle.remove();
}

// 定期创建粒子
setInterval(createParticle, 1000);

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 滚动视差效果
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});