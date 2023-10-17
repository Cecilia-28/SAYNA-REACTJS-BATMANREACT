import React from 'react';

/*Images*/
import fleche from '../assets/images/Logos/flèche_down_header.png';
import bathome2 from '../assets/images/Illustrations/bathome/Bathome2.png';
import bathome3 from '../assets/images/Illustrations/bathome/Bathome3.png';
import bathome4 from '../assets/images/Illustrations/bathome/Bathome4.png';
import bathome5 from '../assets/images/Illustrations/bathome/Bathome5.png';
import bathome6 from '../assets/images/Illustrations/bathome/Bathome6.png';
import bathome7 from '../assets/images/Illustrations/bathome/Bathome7.png';
import bathome8 from '../assets/images/Illustrations/bathome/Bathome8.png';
import bathome9 from '../assets/images/Illustrations/bathome/Bathome9.png';
import bathome10 from '../assets/images/Illustrations/bathome/Bathome10.png';
import bathome11 from '../assets/images/Illustrations/bathome/Bathome11.png';
import bathome12 from '../assets/images/Illustrations/bathome/Bathome12.png';
import bathome13 from '../assets/images/Illustrations/bathome/Bathome13.png';
import firstarrow from '../assets/images/Logos/icon_flèche_1.png';
import lastarrow from '../assets/images/Logos/icon_flèche_2.png';
import batba from '../assets/images/Illustrations/bathome/Bathome_ba1.png';
import batbas from '../assets/images/Illustrations/bathome/Bathome_ba2.png';
import guillemet from '../assets/images/Logos/icon_guillemets_1.png';
import guillemets from '../assets/images/Logos/icon_guillemets_2.png';


const Home = () => {
  return (
    <main className='intro'>
      <section id="intro" className='bg-home'>
        <div className="parent">
          <div className="intro-text">
            <p>Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle 
            contre les criminels de Gotham City.  Il est vengeur.<br/>Il est la nuit.
            <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Il est Batman.</span></p>
            <div className="button">
                <button type="button" className="btn">VOIR LE HEROS</button>
                <button type="button" className="btn" onclick="location.href='#enemy'">LES ADVERSAIRES</button>
            </div>
          </div>
        </div>
      </section>

      <div className="flèche">
            <img src={fleche} alt="" onclick="location.href='#home'"/>
      </div>

      <section id="home">
            <div class="titles-stuff">
                <h1>BATMAN AU CINÉMA</h1>
                <p>Le personnage de Batman est un super héros de l’univers de DC Comics. Il a été créé par le
                    dessinateur Bob Kane et le scénariste Bill Finger et apparaît pour la première fois dans le
                    comic book Detective Comics en 1939. Batman se différencie de Superman, alors héros
                    majeur de DC, car il n’a aucun pouvoir. Il sera porté au cinema pour la première fois en 1943
                    par Lewis Wilson et bénéficiera de nombreux reboot, donnant l’occasion à de multiples
                    acteurs d’interpréter l’homme chauve-souris. Voici les trois derniers :
                </p>
            </div>
            <div class="thebats">
                <div>
                    <img src={bathome2} alt=""/>
                    <h6>Robert Pattinson <br/>(2022)</h6>
                </div>
                <div>
                    <img src={bathome3} alt=""/>
                    <h6>Christian Bale <br/>(2006 - 2008 - 2012)</h6>
                </div>
                <div>
                    <img src={bathome4} alt=""/>
                    <h6>Ben Affleck <br/>2016- 2017/2020 – 2023</h6>
                </div>
            </div>
        </section>

        <section id="enemy">
            <div class="foe titles-stuff">
                <div class="bata">
                    <h1>NÉMÉSIS</h1>
                    <div class="batarang">
                        <img src={bathome13} alt=""/>
                    </div>
                </div>
                <p>Batman souhaite éradiquer la criminalité de Gotham. C’est pourquoi, il affrontera la plupart
                    du temps, des vilains sans capacités surnaturelles mais particulièrement violents ou
                    psychopathes. Avec son introduction dans la Justice League il aura l’occasion de se mesurer à
                    des antagonistes qui défient l’imagination et les lois de la physique. Parmi les derniers
                    ennemis emblématiques que nous avons pu voir au cinéma, on retrouve :
                </p>
            </div>
            <div class="thebats">
                <div>
                    <img src={bathome5}  alt=""/>
                    <h6>The Riddler - Paul Dano<br/>(2022)</h6>
                </div>
                <div>
                    <img src={bathome6} alt=""/>
                    <h6>Le Joker - Heath Ledger<br/>(2008)</h6>
                </div>
                <div>
                    <img src={bathome7} alt=""/>
                    <h6> Darkseid - Ray Porter<br/>(2022)</h6>
                </div>
            </div>
        </section>

        <div class="vigilent">
            <div class="random">
                <img src={bathome12} alt=""/>
            </div>
        </div>

        <section id="ally">
            <div class="titles-stuff">
                <h1>ALLIES</h1>
                <p>Alfred est le majordome des Wayne. A leur mort il s’occupe de l’éducation du jeune Bruce
                    avant de l’assister dans son rôle du Batman. Ce dernier rencontrera Catwoman dès le
                    premier numéro des aventures de l’homme chauve-souris en 1940. Tantôt ennemie tantôt
                    alliée la jeune femme fatale fera tourner la tête de Batman à maintes reprises. Du côté de la
                    police, Bruce pourra compter sur l’aide infaillible de James Gordon, “Jim”, qui désire lui aussi
                    nettoyer sa ville de la criminalité qui y règne.
                </p>
            </div>
            <div class="thebats">
                <div>
                    <img src={bathome8} alt=""/>
                    <h6>Alfred Pennyworth - <br/> Michael Cain<br/>(2006 - 2008 - 2012)</h6>
                </div>
                <div>
                    <img src={bathome9} alt=""/>
                    <h6>Catwoman - Zoé Kravitz<br/>(2008)</h6>
                </div>
                <div>
                    <img src={bathome10} alt=""/>
                    <h6>James Gordon<br/>(2014-2019)</h6>
                </div>
            </div>
        </section>

        <section id="justiceleague">
            <div class="titles-stuff jlt">
                <h1>JUSTICE LEAGUE</h1>
                <p>Lorsque la Terre est menacée les plus grands super-héros s’allient pour la protéger. Ils
                    doivent cependant apprendre à se faire confiance mutuellement et à faire équipe ce qui ne
                    sera pas chose aisée. Ensemble ils forment la Justice League, les plus grands super-héros de
                    la Terre, ceux vers qui le monde entier se tourne lorsque les menaces extraterrestres ou
                    surnaturelles menacent son existence.
                </p>
            </div>
            <div class="jl">
                    <img src={bathome11} alt=""/>
            </div>
        </section>

        <section id="trailer">
            <div class="trailer titles-stuff"><h1>MULTIMEDIA</h1></div>
            <div class="media">
                <div class="arrow"><img src={firstarrow} alt=""/></div>
                <div class="synopsis">
                    <img src={batba} alt=""/>
                    <div class="texts">
                        <div class="imdb">
                            <h3>ACTION, Adventure</h3>
                            <h3>Batman Begins</h3>
                            <h3>IMDB : <span style={{ color: 'yellow'}}>8.2</span></h3>
                            <p style={{ textAlign: 'justify' }}>
                                Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément
                                traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de
                                guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De retour chez lui à
                                Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans
                                la lutte contre le crime sous le nom de Batman.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="arrow"><img src={lastarrow} alt=""/></div>
            </div>
        </section>

        <div class="video">
                <a href="https://www.youtube.com/watch?v=jXrFsn9pcZY&ab_channel=WarnerBros.France"><img src={batbas} alt=""/></a>
        </div>

        <section id="contact">
            <form>
                <div class="formulaire">
                    <span style={{textAlign: 'center'}}><h1>PRENONS CONTACT</h1></span>
                    <div class="one">
                        <h2>ADRESSE EMAIL</h2>
                        <input type="Adresse email" placeholder="Adresse email"/>
                    </div>
                    <div class="two">
                        <h2>NEWSLETTER</h2>
                        <label for="chck">En cochant cette case vous acceptez de recevoir l’actualité concernant les aventures de Batman :</label>
                        <input type="checkbox" id="chck" style={{width: '20px'}}/>
                    </div>
                    <div>
                        <select id="selection">
                            <option value="">Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter</option>
                            <option value="daily">Par jour</option>
                            <option value="weekly">Par semaine</option>
                            <option value="monthly">Par mois</option>
                        </select>
                    </div>
                    <div class="three">
                        <p>Souhaitez-vous recevoir des news</p>
                        <div class="button">
                            <button type="button" class="btn2">Des films</button>
                            <button type="button" class="btn2">Des comics</button>
                            <button type="button" class="btn2">De tout</button>
                        </div>
                    </div>
                    <div class="four">
                        <h2>MESSAGE</h2>
                        <input type="sms" placeholder="Laissez un commentaire pour la communauté"/>
                        <div class="button">
                            <button type="button">CONFIRMER</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>

        <section id="quotes">
            <div class="leftg">
                <img src={guillemet} alt=""/>
            </div>
            <div class="quotes">
                <div> <p style={{fontWeight: 'bold'}}>La seule façon raisonnable de vivre en ce bas monde, <br/> c'est en dehors des règles.<br/></p></div> 
                <div style={{paddingTop: '3%', fontSize: '0.8em'}}><p>The Dark Knight : Le Chevalier Noir - <br/>Le Joker à Batman (2008)</p></div>
            </div>
            <div class="point">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot" style={{background: '#429ef5'}}></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="rightd">
                <img src={guillemets} alt=""/>
            </div>
        </section>
    </main>
  );
};

export default Home;