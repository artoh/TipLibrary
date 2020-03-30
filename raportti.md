# Loppuraportti

TipLibrary

- Ilari Junnonen
- Heli Hyvättinen
- Arto Hyvättinen
- Toni Silfver (keskeytti viikon 2 aikana)

## Haasteet

### Sprintti 1
- Testien unohtaminen suunnittelussa, testikattavuus jäi heikoksi
- Komponentteja oli tehty tuplana, jäänyt teknisesti heikompaa koodia ja teknistä velkaa
- Työsketenlytavat ei vielä vakiintuneitä (otettiin käyttöön feature brach -> pull request -> review -työnkulku)
- Sprintin kuluessa projektin tilanteen seuraaminen epäselvää
- Backendin supertestejä ei saatu mukaan testikattavuusraporttiin
- CircleCI:n konfiguraatio haastavaa, vei oletettua enemmän aikaa
- Teknologiset haasteet, kun ei aikaa valittuun tekniikkaan tutustumiseen
- Haasteita GitHub käytön kanssa

### Sprintti 2
- Selenium-CircleCI:n konfiguraatio yllättävän vaikeaa, ei saatu hyväksymistestejä käyttöön

### Yleisesti
- ScrumBut: Koska ei ollut Scrum Masteria eikä daily scrumia, oli työskentely pitkältä "viikottaisia vesiputouksia": kun 
suunniteltaessa pitäisi nopeasti saada jaettua user storyt taskeiksi, ei huomata järkeviä kokonaisuuksia ja päädytään
tekemään päällekkäistä työtä
- Pieni viikottainen työmäärä ja etätyöskentely heikentävät ketteryyttä

## Onnistumiset

- Varsinaisen koodauksen aika-arviot onnistuivat hyvin 
- Työskentelytapoja saatiin parannettua projektin kuluessa
- Kolmannessa sprintissä saatiin saavutettua kaikki sprintin tavoitteet. Jopa hyväksymistestit saatiin CircleCI:in!
- Tuote valmistui ja asiakas oli tyytyväinen!

## Mitä opittiin
- Workflow feature branch -> pull request -> review (ja oman työhaaran pitäminen ajan tasalla)
- Hyödyntämään CI:n testejä pushattaessa oma työhaara GitHubiin
- Automaattisen tuotantoonviennin hyödyntäminen
- Full Stack -projektin konfigurointi oli työlästä, mutta tämän osaamisesta oletamme sitten olevan hyötyä myös jatkossa
- Miten tehtäviä ketjutetaan suunnittelussa (esim. ketju backend -> service -> komponentit)

## Kehitysideoita
- Taskeissa voisi olla hyvä määritellä jo pull requestien katselmoija
- Google Docsilla ylläpidetyt backlogit tuntuivat kömpelöiltä eivätkä integroidu GitHubiin. 
Ovatko burndown-käyrät niin hyödyllisiä, että niiden tähden kannattaa jättää GitHub Projects -tyyppiset työkalut hyödyntämättä?
- Koska tämä projekti on monelle ensimmäinen kerta, kun useampi henkilö koodaa yhteiseen repositioon, niin materiaalissa voisi 
tästä enemmän ohjeita (esim. suosituksia työnkulusta). 

