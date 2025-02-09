import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini e condizioni d'uso",
  description: "Termini e condizioni d'uso di Zucchero Mania",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      {/* Titolo principale */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Termini e condizioni d'uso</h1>
      </section>

      {/* 1 / Disposizioni Generali */}
      <section>
        <h2 className="text-2xl font-bold">1 / Disposizioni Generali</h2>
        <p className="mt-2">
          L'offerta e la vendita di prodotti sul sito web ZuccheroMania.it sono regolate dalle presenti Disposizioni Generali di Vendita. I prodotti acquistati sul sito web ZuccheroMania.it sono venduti direttamente da Zucchero Mania. Il Cliente è tenuto a leggere attentamente le Condizioni Generali che sono state messe a sua disposizione sul Sito.
        </p>
      </section>

      {/* 2 / Dati del Venditore */}
      <section>
        <h2 className="text-2xl font-bold">2 / Dati del Venditore</h2>
        <p className="mt-2">
          Zucchero Mania, sede legale Via Ettore Petrolini 12, 42122 Reggio Emilia (RE) – p.iva 03084830359
        </p>
      </section>

      {/* 3 / La gestione degli ordini */}
      <section>
        <h2 className="text-2xl font-bold">3 / La gestione degli ordini</h2>
        
        {/* 3.1 / Generalità */}
        <h3 className="text-xl font-bold mt-4">3.1 / Generalità</h3>
        <p className="mt-2">
          Tutti i prodotti presenti sul nostro catalogo on-line si rivolgono esclusivamente agli utilizzatori finali, che la legge definisce “Consumatori”. Le offerte di prodotti nonché i prezzi degli stessi sono validi finché ancora visibili ed acquistabili sul sito e comunque fino ad esaurimento scorte.
        </p>
        <p className="mt-2">
          Questi termini e condizioni generali di vendita regolano esclusivamente l'offerta, la trasmissione e l'accettazione degli ordini d'acquisto fra gli utenti del sito di e-commerce ZuccheroMania.it, che abbiano compiuto la maggiore età (18 anni), e la ditta stessa, limitatamente ai prodotti presenti sul sito. Le caratteristiche e i prezzi dei prodotti sono riportati in buona evidenza nell'offerta relativa a ciascun prodotto.
        </p>

        {/* 3.2 / Acquisto dei prodotti */}
        <h3 className="text-xl font-bold mt-4">3.2 / Acquisto dei prodotti</h3>
        <p className="mt-2">
          Per l'acquisto dei prodotti il cliente dovrà provvedere a registrarsi come utente presso ZuccheroMania.it e, dopo aver preso visione delle Condizioni Generali – con particolare riferimento al contributo per le spese di consegna, alle modalità di esercizio del diritto di recesso e alla Privacy – provvederà a compilare ed inviare il modulo d'ordine in formato elettronico, seguendo le istruzioni contenute nel sito, mettendo ciascun prodotto di proprio interesse nell'apposito "carrello", selezionando la modalità di pagamento desiderata e scegliendo l'opzione "invia ordine".
        </p>
        <p className="mt-2">
          Prima di inoltrare il proprio ordine di acquisto il cliente avrà la possibilità di correggere eventuali errori di inserimento dei dati, modificare la quantità o eliminare alcuni dei prodotti precedentemente inseriti nel suo "carrello", seguendo le apposite procedure di modifica contenute nel sito.
        </p>
        <p className="mt-2">
          Con l'invio dell'ordine, il Cliente riconosce e dichiara di aver preso visione di tutte le indicazioni fornitegli durante la procedura d'acquisto e di accettare integralmente le Disposizioni Generali. Il Cliente avrà la possibilità di visionare e seguire lo stato del suo ordine attraverso l'area "Ordini" del proprio account.
        </p>

        {/* 3.3 / Conferma di ricezione dell'ordine */}
        <h3 className="text-xl font-bold mt-4">3.3 / Conferma di ricezione dell'ordine</h3>
        <p className="mt-2">
          In conformità a quanto disposto all'art. 53 del Codice del Consumo (D.L. 206, 06/09/205), il cliente riceve, al momento dell'esecuzione del contratto, a mezzo email, la conferma di ricezione dell'ordine di acquisto, contenente un riepilogo delle caratteristiche essenziali del prodotto ordinato, del suo prezzo, dell'importo pagato, e dell'indirizzo geografico per presentare eventuali reclami o richiedere altre informazioni.
        </p>

        {/* 3.4 / Trasporto e consegna */}
        <h3 className="text-xl font-bold mt-4">3.4 / Trasporto e consegna</h3>
        <p className="mt-2">
          I prodotti saranno consegnati all'indirizzo indicato dal cliente al momento della compilazione dell'ordine. Il cliente può richiedere la consegna di quanto ordinato a una persona fisica a sua scelta, la cui residenza o domicilio si trovi all'interno del territorio italiano.
        </p>
        <p className="mt-2">
          Le spese di consegna sono a carico del Cliente e sono distintamente evidenziate sul Sito e nel modulo d'ordine. L'importo da corrispondere per la spedizione è pari a €8,00; per acquisti superiori a €100,00 la spedizione è gratuita. Tutti gli acquisti verranno consegnati mediante corriere espresso SDA dal lunedì al venerdì, esclusi festivi e feste nazionali. Zucchero Mania non è responsabile per eventuali ritardi non prevedibili.
        </p>
        <p className="mt-2">
          Tutte le spedizioni effettuate con corriere SDA sono tracciabili, cliccando sull'apposito riquadro presente nella colonna a destra in tutte le pagine di ZuccheroMania.it, inserendo il codice di spedizione che vi sarà comunicato per email al momento della spedizione dei prodotti. La consegna viene effettuata dal lunedì al venerdì (sabato e festivi esclusi), su tutto il territorio nazionale, entro 4 (quattro) giorni lavorativi, con decorrenza dal giorno successivo a quello in cui viene per la prima volta effettuata la lettura ottica del barcode presso l'hub di smistamento.
        </p>
        <p className="mt-2">
          In ogni caso, salvo i casi di forza maggiore o caso fortuito, in conformità ai termini previsti dall’art. 54 del Codice del Consumo, i Prodotti saranno consegnati entro un termine massimo di 30 (trenta) giorni a decorrere dal giorno successivo a quello in cui il Cliente ha trasmesso l'ordine a Zucchero Mania, salvo l'impossibilità di consegnare la merce ordinata a seguito della sopravvenuta indisponibilità, anche temporanea, dei prodotti, di cui comunque verrà data comunicazione al cliente entro la scadenza del suddetto termine. Per la consegna della merce è necessaria la presenza del cliente o di un suo incaricato all'indirizzo del destinatario indicato nell'ordine. Al momento della consegna della merce da parte del Corriere, il cliente è tenuto a controllare che il numero dei colli in consegna corrisponda a quanto indicato nel documento di trasporto e che il pacco risulti integro e non alterato. In caso di eventuali danni al pacco e/o ai prodotti o la mancata corrispondenza del numero dei colli, il Cliente dovrà accettare la merce con riserva di controllo scritta sulla prova di consegna del Corriere. Una volta firmato il documento di trasporto, il Cliente non potrà opporre alcuna contestazione circa le caratteristiche esteriori del pacco consegnato o l'eventuale mancanza di altri colli.
        </p>
      </section>

      {/* 4 / Garanzie ed indicazioni sui prodotti */}
      <section>
        <h2 className="text-2xl font-bold">4 / Garanzie ed indicazioni sui prodotti</h2>
        <p className="mt-2">
          Zucchero Mania acquista i prodotti presenti nel suo sito direttamente da fornitori e da commercianti selezionati con attenzione per i loro controlli di qualità scrupolosi e stringenti. I prodotti in vendita su ZuccheroMania.it, corrispondenti agli standard del settore, evidenziano in ciascuna pagina web le caratteristiche principali e gli scopi d'uso. Le foto dei prodotti in vendita potrebbero differire leggermente dal reale in termini d’immagine e di colori, dovuti al browser o al tipo di monitor utilizzato, e sono intese a puro scopo indicativo. Le caratteristiche tecniche di un prodotto, le omologazioni e le dichiarazioni di sicurezza di ogni prodotto venduto da ZuccheroMania.it sono indicate sull’etichetta, sulla confezione o nelle istruzioni d’uso e possono essere riportate interamente o per estratto nel sito a corredo dell’illustrazione del prodotto.
        </p>
        <p className="mt-2">
          Il prezzo dei prodotti è espresso in euro ed è comprensivo di IVA, nonché di tutte le tasse e imposte applicabili. I prezzi sono soggetti a cambiamento: si prega di verificare sempre il prezzo finale di vendita prima dell’invio della proposta d’ordine.
        </p>
        <p className="mt-2">
          Tutti i prodotti vengono consegnati con un’etichetta/targhetta di identificazione allegata e sigillati. Si prega di non rimuovere i sigilli dei prodotti acquistati, l’etichetta o la targhetta, qualora si desideri restituire il prodotto comprato.
        </p>
        <p className="mt-2">
          Zucchero Mania non è in alcun modo responsabile delle informazioni o dei dati errati e delle eventuali inesattezze tecniche o di altra natura fornite da terzi che potrebbero essere riportate nei prodotti. Tutti i prodotti sono coperti dalla garanzia per i difetti di conformità, della durata non inferiore a 24 (ventiquattro) mesi, prestata limitatamente al territorio italiano, allo Stato, alla Città del Vaticano e alla Repubblica di San Marino (“Garanzia legale di conformità per i beni di consumo”) prevista dal Titolo III, Capo I del Codice del Consumo (art. 128 e seguenti).
        </p>
        <p className="mt-2">
          La garanzia, prestata per la durata indicata e all’interno del territorio specificato, si applica al prodotto che presenti un difetto di conformità, purché il prodotto stesso sia utilizzato correttamente, nel rispetto della sua destinazione d'uso e di quanto previsto nella documentazione tecnica o nelle istruzioni d’uso allegate. Tale garanzia è prestata unicamente al Cliente che sia Consumatore. In caso di difetto di conformità, Zucchero Mania provvederà, a proprie spese, al ripristino della conformità del prodotto mediante riparazione/sostituzione o alla riduzione del prezzo, salvo eventuale risoluzione del contratto se necessario. L'assistenza in garanzia verrà prestata previa esibizione del titolo d’acquisto.
        </p>
        <p className="mt-2">
          Zucchero Mania si riserva la facoltà di sostituire il prodotto anche con uno di caratteristiche superiori, ovvero di risolvere il contratto di vendita con la restituzione dell’intera somma pagata e di eventuali ulteriori spese, nel caso in cui, per qualsiasi ragione, non sia possibile ripristinare o sostituire un prodotto in garanzia. Zucchero Mania non risponde per eventuali ritardi nelle riparazioni o sostituzioni da parte di terzi e/o del produttore. Nei casi in cui sia richiesta la restituzione del prodotto per fruire della garanzia, il prodotto dovrà essere restituito nella confezione originale, completa in tutte le sue parti (compresi imballo, eventuale documentazione e dotazione accessoria).
        </p>
        <p className="mt-2">
          Zucchero Mania garantisce il rispetto delle norme di qualità relative ai prodotti in vendita, esclusivamente fino al momento della consegna. È esclusa ogni responsabilità derivante dall'utilizzo improprio dei prodotti successivo alla consegna.
        </p>

        {/* 4.1 / Resi merce e diritto di Recesso */}
        <h3 className="text-xl font-bold mt-4">4.1 / Resi merce e diritto di Recesso</h3>
        <p className="mt-2">
          Il Cliente può restituire a proprie spese i prodotti acquistati da Zucchero Mania senza alcuna penalità e senza specificare il motivo, entro dieci (10) giorni lavorativi dal ricevimento dei prodotti. Per esercitare il diritto di recesso, il Cliente dovrà inviare al seguente indirizzo:{" "}
          <a href="mailto:zuccheromania25@gmail.com" className="text-blue-500 underline">
            zuccheromania25@gmail.com
          </a>{" "}
          una comunicazione contenente:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>
            la manifestazione di volontà di avvalersi del diritto di recesso ai sensi dell'art. 64 del Codice del Consumo;
          </li>
          <li>
            l'indicazione dei prodotti per i quali il Cliente intende avvalersi del diritto di recesso;
          </li>
          <li>
            il numero progressivo d'ordine rilasciato al momento dell'acquisto;
          </li>
          <li>
            i dati relativi al conto corrente bancario del Cliente, esclusivamente nel caso in cui il pagamento sia stato effettuato tramite bonifico bancario o carta di credito.
          </li>
        </ul>
        <p className="mt-2">
          Tale comunicazione potrà essere inviata, sempre entro il suddetto termine di 10 (dieci) giorni, anche mediante mail, telegramma o fax.
        </p>
        <p className="mt-2">
          I prodotti devono essere restituiti integri, completi di accessori, nel loro imballaggio originale; ove presente, deve risultare integro anche il sigillo originale dei singoli prodotti. Il diritto di recesso non è consentito nel caso di:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>acquisto di prodotti confezionati sigillati, restituiti con la confezione non più sigillata;</li>
          <li>prodotti non sostanzialmente integri o che presentino danneggiamenti, difformità, deterioramenti e/o alterazioni di qualsiasi tipo;</li>
          <li>beni che per loro natura non possono essere rispediti o che rischiano di deteriorarsi o alterarsi rapidamente;</li>
          <li>generi alimentari, bevande o altri beni di uso domestico per uso corrente.</li>
        </ul>
        <p className="mt-2">
          Le spese di consegna per la restituzione dei prodotti sono a carico del Cliente; qualsiasi spesa sostenuta per la riconsegna non sarà rimborsabile. Se il diritto di recesso è esercitato conformemente alle disposizioni contenute in questa sezione, Zucchero Mania rimborserà l’intero importo dei prodotti resi.
        </p>
        <p className="mt-2">
          Nel caso in cui il reso non sia conforme ai termini e alle condizioni generali precisate al paragrafo 4 delle presenti condizioni generali di vendita, non sarà effettuato alcun rimborso delle somme già pagate a Zucchero Mania; tuttavia, il Cliente potrà ricevere, a proprie spese, i prodotti nelle condizioni in cui sono stati rispediti. Se non si desidera ricevere i prodotti nelle condizioni in cui sono stati rispediti, Zucchero Mania è autorizzata a trattenere i prodotti e le somme già ricevute.
        </p>

        {/* 4.2 / Tempi e Procedure di Rimborso */}
        <h3 className="text-xl font-bold mt-4">4.2 / Tempi e Procedure di Rimborso</h3>
        <p className="mt-2">
          Dopo che i prodotti sono stati restituiti, Zucchero Mania verificherà la conformità dei prodotti secondo le condizioni indicate al paragrafo 4. Una volta confermato che tali condizioni sono state rispettate, Zucchero Mania invierà una mail che conferma l'accettazione dei prodotti restituiti.
        </p>
        <p className="mt-2">
          Indipendentemente dal tipo di pagamento utilizzato dal Cliente per l’acquisto, la procedura di rimborso verrà effettuata entro trenta (30) giorni dall’invio della mail che conferma l'accettazione dei prodotti restituiti. L'importo pagato corrispondente agli articoli restituiti sarà rimborsato al Cliente.
        </p>
      </section>

      {/* 5 / Legge applicabile e tutela dei diritti */}
      <section>
        <h2 className="text-2xl font-bold">5 / Legge applicabile e tutela dei diritti</h2>
        <p className="mt-2">
          I contratti conclusi con Zucchero Mania attraverso il Sito sono disciplinati dal diritto italiano ed, in particolare, dal decreto legislativo italiano del 6 settembre 2005, n° 206 sui contratti a distanza, e dal decreto legislativo italiano del 9 aprile 2003, n° 70 per gli aspetti relativi al commercio elettronico.
        </p>
        <p className="mt-2">
          Ai sensi degli articoli 140 e 141 del Codice del Consumo, il Cliente ha la facoltà di agire a tutela dei propri interessi attraverso un’associazione di consumatori o di promuovere un tentativo di composizione stragiudiziale per la risoluzione di eventuali controversie. In alternativa, il Cliente può promuovere un giudizio ordinario per risolvere le controversie derivanti dall'interpretazione, esecuzione e validità delle presenti Condizioni Generali.
        </p>
      </section>

      {/* 6 / Contatti */}
      <section>
        <h2 className="text-2xl font-bold">6 / Contatti</h2>
        <p className="mt-2">
          Per informazioni e/o comunicazioni si può inviare una mail all’indirizzo{" "}
          <a href="mailto:zuccheromania25@gmail.com" className="text-blue-500 underline">
            zuccheromania25@gmail.com
          </a>
          , telefonare allo +39 327 881 3933 o scrivere alla sede dell’azienda in Via Ettore Petrolini 12, 42122 Reggio Emilia (RE).
        </p>
      </section>
    </main>
  );
}
