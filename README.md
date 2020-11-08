# DIS-eksamen


For at køre dette program skal følgende steps fuldføres i kontinuerlig rækkefølge:

1. Kør `npm install`
- Denne kommand vil installere relevante dependencies, som applikationen afhænger af for at fungere efter hensigt. Disse relevante dependencies er angivet i package.json
2. Opret en mysql database ved navn *dis-eksamen*
- Såfremt et anden navn ønskes kan dette konfigureres i ./app/config/config.json
3. Kør `sequelize db:migrate`
- Denne kommand vil opsætte din database efter den korrekte datamodel
4. Kør `npm run serve`
- Dette er et run click script til at igangsætte og stoppe:
  - Load balancer
  - Servere
  - Seaport
5. Test applikationen og hav det sjovt.
