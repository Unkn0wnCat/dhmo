import React from 'react';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Numbers from './components/Numbers.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-title"><em>Nein</em> zu <em>Dihydrogenmonoxid</em></span>
      </header>
      <main>
        <Numbers />
        <section>
          <div>
            <h1>Schädlichkeit von DHMO</h1>
            <Tabs className="tabContainer">
              <TabList className="tabSelector">
                <Tab>Saurer Regen</Tab>
                <Tab>Korrosion & Erosion</Tab>
                <Tab>Menschlicher Körper</Tab>
              </TabList>

              <TabPanel>
                <h2>DHMO in Saurem Regen</h2>
                <p>
                  DHMO ist der Hauptbestandteil von saurem Regen als so genannte "<a href="http://kassel-zeitung.de/cms1/index.php?/archives/11195-Hydroxylsaeure-Der-unsichtbare-Killer.html">Hydroxylsäure</a>". Saurer Regen schädigt Natur und Umwelt und ist ein Hauptverursacher des Waldsterbens.
                </p>
              </TabPanel>
              <TabPanel>
                <h2>DHMO und seine Rolle bei Korrosion und Erosion</h2>
                <p>
                  DHMO trägt sehr stark zur <a href="https://de.wikipedia.org/wiki/Bodenerosion">Bodenerosion</a> bei. Zudem sorgt es für eine beschleunigte <a href="https://de.wikipedia.org/wiki/Korrosion">Korrosion und somit für einen schnelleren Ausfall Technischer Geräte</a>.
                </p>
              </TabPanel>
              <TabPanel>
                <h2>DHMO und der menschliche Körper</h2>
                <p>
                  DHMO kann den menschlichen Körper in sehr vielen Arten beschädigen und ist deshalb für viele Tode verantwortlich.
                </p>
                <h3>Übermäßiges Trinken von DHMO</h3>
                <p>
                  Wenn der Menschliche Körper zu viel DHMO einnimmt kann das zu Symptomen wie Schwindel, Übelkeit und Erbrechen führen. In extremeren Fällen können sogar Organschäden auftreten und so bis zum Tod führen.
                </p>
                <h3>Festes DHMO</h3>
                <p>
                  Längerer Kontakt der menschlichen Haut zu DHMO in seinem festen Zustand kann schnell zu schweren <a href="https://de.wikipedia.org/wiki/Erfrierung">Gewebeschäden</a> führen.
                </p>
                <h3>Gasförmiges DHMO</h3>
                <p>
                  Gasförmiges DHMO kann schon bei kurzem Kontakt <a href="https://de.wikipedia.org/wiki/Verbrennung_(Medizin)">schwere Verbrennungen</a> hervorrufen.
                </p>
                <h3>Einatmen von DHMO</h3>
                <p>
                  Durch das Einatmen von DHMO sind alleine in Deutschland im Jahr 2018 über 500 Menschen gestorben. Hierbei können schon kleinste Mengen tödlich enden.
                </p>
                <h3>Sucht</h3>
                <p>
                  DHMO macht sehr schnell süchtig und viele Menschen sind bereits von einer Sucht betroffen. Allerdings ist Entzug der falsche Weg, da bereits 168 Stunden ohne DHMO den Tod für einen Süchtigen bedeutet.
                </p>
              </TabPanel>
            </Tabs>
          </div>
        </section>
        <section>
          <div>
            <h1>DHMO und die Industrie</h1>
            <ul>
              <li>DHMO wird als konkurrenzlos billiges Universallösungsmittel genutzt.</li>
              <li>DHMO wird regelmäßig von großen Firmen ungefiltert in Flüsse gegeben.</li>
              <li>DHMO wird in Nuklearanlagen als Kühlmittel eingesetzt.</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h1>DHMO und die Politik</h1>
            <ul>
              <li>Die Behörden sind nicht in der Lage DHMO im Abwasser systematisch zu messen.</li>
              <li>Die Behörden sind nicht in der Lage DHMO aus dem Abwasser zu filtern.</li>
              <li>Die Einleitung DHMOs ins Abwasser ist nicht gesetzlich unterbunden.</li>
              <li>DHMO erscheint bisher nicht auf den amtlichen Listen gefährlicher Stoffe.</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h1>Was tun?</h1>
            <p>
              Auch du kannst etwas zur Situation beitragen! Fordere von deinen Politikern eine klare Haltung zum Verbot von DHMO. Du kannst zudem unter <a href="https://twitter.com/intent/tweet?text=%23BanDHMO&url=https%3A%2F%2Fdhmo.1in9.net">#BanDHMO</a> dich in sozialen Medien stark machen.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h1>Weitere Links</h1>
            <ul>
              <li><a href="https://de.wikipedia.org/wiki/Dihydrogenmonoxid">Dihydrogenmonoxid auf Wikipedia</a></li>
              <li><a href="https://de.statista.com/statistik/daten/studie/259553/umfrage/umsatz-in-der-wasserver-und-abwasserentsorgung-in-deutschland">Umsatzstatistiken auf statista</a></li>
            </ul>
          </div>
        </section>
      </main>
      <footer>Diese Seite ist Satire. <a href="https://kevink.dev/legal/about">Impressum</a></footer>
    </div>
  );
}

export default App;
