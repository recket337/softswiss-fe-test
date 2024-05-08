import logo from '../../assets/images/main-page-logo.svg';
import purchase from '../../assets/images/purchase.svg';
import rocket from '../../assets/images/rocket.svg'
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import './MainPage.scss';
import { offersItems } from './constants';

function MainPage() {
  const navigationListMarkdown =
    <ul className='main-page__navigation-list'>
      <li className='main-page__navigation-list-item'>
        <button className='main-page__navigation-list-button clear'>Home</button>
      </li>
      <li className='main-page__navigation-list-item'>
        <button className='main-page__navigation-list-button clear'>Products</button>
      </li>
      <li className='main-page__navigation-list-item'>
        <button className='main-page__navigation-list-button clear'>
          <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">

            <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stop-color="#fd712c"/>
              <stop offset="100%" stop-color="#f21780"/>
            </linearGradient>
            </defs>

            <path className='icon' fill="url(#gradient)" fillRule="evenodd" clipRule="evenodd" d="M9.73106 18.8834C9.73106 17.8358 8.90901 16.9949 7.88498 16.9949C6.86097 16.9949 6.0389 17.8358 6.0389 18.8834C6.0389 19.931 6.86097 20.7719 7.88498 20.7719C8.90901 20.7719 9.73106 19.931 9.73106 18.8834ZM22.6536 18.8834C22.6536 17.8358 21.8315 16.9949 20.8075 16.9949C19.7835 16.9949 18.9614 17.8358 18.9614 18.8834C18.9614 19.931 19.7835 20.7719 20.8075 20.7719C21.8315 20.7719 22.6536 19.931 22.6536 18.8834ZM24.4997 2.83252C24.4997 2.31601 24.0814 1.88837 23.5766 1.88837H6.25526C6.11107 1.18018 6.09657 0 5.11591 0H1.42372C0.918956 0 0.500732 0.427865 0.500732 0.944C0.500732 1.46049 0.918956 1.88837 1.42372 1.88837H4.36593L6.91872 14.0299C6.71678 14.4574 6.0389 15.5936 6.0389 16.0509C6.0389 16.5674 6.45715 16.9949 6.96199 16.9949H21.7306C22.2353 16.9949 22.6536 16.5674 22.6536 16.0509C22.6536 15.5347 22.2353 15.1067 21.7306 15.1067H8.46192C8.60611 14.8116 8.80807 14.5017 8.80807 14.1627C8.80807 13.8232 8.6782 13.4546 8.62053 13.1297L23.6776 11.3302C24.1535 11.271 24.4997 10.858 24.4997 10.3857V2.83252Z" />
          </svg>
        </button>
      </li>
    </ul>

  return (
    <div className='page main-page'>
      <header className='block main-page__header'>
        <img className='main-page__logo' src={logo} alt="logo" />
        <div>
          <nav className='main-page__navigation'>
            {navigationListMarkdown}
          </nav>
          <BurgerMenu>
            {navigationListMarkdown}
          </BurgerMenu>
        </div>

      </header>
      <main className='main-page__main'>
        <section className='block main-page__info'>
          <div className='main-page__info-block'>
            <h1 className='main-page__main-headline'>
              Discover the vast expanses of <span className='purple-text'>space</span>
            </h1>
            <h2 className='main-page__second-headline'>
              Where the possibilities are <span className='yellow-text'>endless!</span>
            </h2>
            <button className='button button-primary'>Learn more</button>
          </div>
          <div className='main-page__info-image' />
        </section>
        <div className='block main-page__background-wrapper'>
          <section className='main-page__offers'>
            <h3 className='main-page__section-headline'>Offers</h3>
            <div className='main-page__offers-container'>
              {offersItems.map(item => (<div key={item.title} className='main-page__offers-container-item' style={{
                backgroundImage: `url(${item.imgSrc})`,
              }}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <button className='button button-secondary'>Learn more</button>
              </div>))}
            </div>
          </section>
          <section className='main-page__description'>
            <h3 className='main-page__section-headline'>Embark on a space journey</h3>
            <p className='main-page__description-text'>
              Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever.
              And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream.
              We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe.
              We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries.
              Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space.
              We offer various options for space excursions.
            </p>
            <button className='main-page__description-read-more clear yellow-text'>Read more</button>
          </section>
        </div>
      </main>
      <footer className='main-page__footer'>
        <img src={rocket} className='main-page__footer-image' />
        <p className='main-page__footer-text yellow-text'>Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default MainPage;
