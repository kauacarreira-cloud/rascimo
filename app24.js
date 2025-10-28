// Smooth scroll para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação dos cards ao aparecerem na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os cards de jogadores
document.querySelectorAll('.player-card').forEach(card => {
    observer.observe(card);
});

// Adicionar efeito de highlight ao clicar nos links do menu
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.menu a').forEach(l => l.style.color = 'white');
        this.style.color = '#ff4444';
        
        setTimeout(() => {
            this.style.color = 'white';
        }, 2000);
    });
});

// Mostrar botão de voltar ao topo quando rolar a página
const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: all 0.3s;
        z-index: 999;
    `;
    
    button.addEventListener('mouseover', () => {
        button.style.background = '#cc0000';
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.background = '#ff4444';
        button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
};

createBackToTop();

console.log('Site sobre Balotelli e o Racismo carregado com sucesso!');