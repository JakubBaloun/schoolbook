Schoolbook je jednoduchá aplikace, která umožňuje evidovat třídy školy, ve třídách evidovat studenty, studentům přiřazovat známky za předměty a sledovat jejich průměrný prospěch.

Aplikace obsahuje čtyři základní entity, se kterými se dále bude pracovat v uživatelském rozhraní:

Třída –⁠ primárně sdružuje žáky školy.

Žák –⁠ patří do třídy.

Předmět –⁠ základní charakteristika vyučovaných předmětů.

Známka –⁠ hlavní entita aplikace, která sdružuje známky žáka z jednotlivých předmětů.

Backend je realizován v Node.js pomocí frameworku Express.js. Validace je prováděna pomocí knihovny Ajv.

Jako databáze je použitý souborový systém, který je ale díky DAO vrstvě snadno rozšiřitelný na skotečnou databázi.
