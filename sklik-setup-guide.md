# Nastavení Dynamického Remarketingu na Skliku

Tento návod vám pomůže propojit váš web se Sklikem, aby se návštěvníkům zobrazovaly přesně ty produkty, které si prohlíželi.

## 1. URL vašeho XML feedu
Váš produktový feed byl vygenerován a je dostupný na této adrese:
`https://vase-domena.manus.space/feed.xml`

*(Poznámka: Po publikování webu nahraďte "vase-domena.manus.space" vaší skutečnou doménou)*

## 2. Postup v rozhraní Sklik (Zboží.cz)
Dynamický remarketing na Skliku využívá data ze Zboží.cz.

1.  **Přihlaste se do Zboží.cz** (stejný účet jako Sklik).
2.  Přejděte do **Správa provozovny** -> **Feed a doprava**.
3.  Do pole **URL feedu** vložte adresu z bodu 1.
4.  Zboží.cz feed zpracuje (může to trvat až 2 hodiny).

## 3. Propojení se Sklikem
1.  Přejděte do **Sklik.cz** -> **Nástroje** -> **Retargeting**.
2.  Ujistěte se, že máte na webu vložený **Retargetingový kód** (v patičce webu).
3.  Vytvořte novou kampaň typu **Produktová** (nebo v existující kampani vytvořte sestavu "Dynamický retargeting").
4.  Jako zdroj dat vyberte propojený účet Zboží.cz.

## 4. Kontrola na webu
Aby Sklik věděl, který produkt si uživatel právě prohlíží, musí být v kódu stránky (v detailu produktu) speciální JavaScript.

Váš web je na to připraven. Když uživatel klikne na produkt, odesíláme událost `rtg` s `itemId` produktu (např. `proerecta-klasik`), což spáruje návštěvníka s produktem ve feedu.

---
**Tip:** Pro maximální výkon nastavte v Skliku kombinaci:
*   **Návštěvníci produktu (1-3 dny):** Agresivnější nabídka, připomenutí.
*   **Návštěvníci produktu (4-14 dní):** Připomenutí benefitů.
*   **Opuštěný košík:** Pokud byste měli košík na webu (zde odkazujeme ven, takže toto nelze měřit přímo, leda přes proklik na tlačítko "Koupit").
