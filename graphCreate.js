//CREATE STATEMENTS

//Creating University
CREATE (Portsmouth:University {title:'Portsmouth University'})
CREATE (Southampton:University {title:'Southampton University'})
CREATE (Brighton:University {title:'Brighton University'})
CREATE (Bournmouth:University {title:'Bournmouth University'})

CREATE (Newcastle:University {title:'Newcastle University'})
CREATE (Manchester:University {title:'Manchester University'})
CREATE (Liverpool:University {title:'Liverpool University'})
CREATE (Edinborough:University {title:'Edinborough University'})

CREATE (Bristol:University {title:'Bristol University'})
CREATE (Cardiff:University {title:'Cardiff University'})
CREATE (Exeter:University {title:'Exeter University'})
CREATE (Cornwall:University {title:'Cornwall University'})

CREATE (Essex:University {title:'Essex University'})
CREATE (UEA:University {title:'UEA University'})
CREATE (Kent:University {title:'Kent University'})
CREATE (London:University {title:'London University'})

//Creating Univerity Speciality
CREATE (Sporty:Speciality {title:'Sporty Univerity'})
CREATE (Acadmeic:Speciality {title:'Acadmeic Univerity'})

//Creating Locations
CREATE (South:Region {title:'South England'})
CREATE (North:Region {title:'North England'})
CREATE (West:Region {title:'West England'})
CREATE (East:Region {title:'East England'})

//Assigning Speciality
CREATE
  (Portsmouth)-[:SPECIALISES_IN]->(Sporty),
  (Southampton)-[:SPECIALISES_IN]->(Acadmeic),
  (Brighton)-[:SPECIALISES_IN]->(Sporty),
  (Bournmouth)-[:SPECIALISES_IN]->(Acadmeic),
  (Newcastle)-[:SPECIALISES_IN]->(Sporty),
  (Manchester)-[:SPECIALISES_IN]->(Acadmeic),
  (Liverpool)-[:SPECIALISES_IN]->(Sporty),
  (Edinborough)-[:SPECIALISES_IN]->(Acadmeic),
  (Bristol)-[:SPECIALISES_IN]->(Acadmeic),
  (Cardiff)-[:SPECIALISES_IN]->(Sporty),
  (Exeter)-[:SPECIALISES_IN]->(Acadmeic),
  (Cornwall)-[:SPECIALISES_IN]->(Sporty),
  (Exeter)-[:SPECIALISES_IN]->(Sporty),
  (UEA)-[:SPECIALISES_IN]->(Acadmeic),
  (Kent)-[:SPECIALISES_IN]->(Sporty),
  (London)-[:SPECIALISES_IN]->(Acadmeic)

//Assiging Locations
CREATE
  (Portsmouth)-[:IS_LOCATED_IN_THE]->(South),
  (Southampton)-[:IS_LOCATED_IN_THE]->(South),
  (Brighton)-[:IS_LOCATED_IN_THE]->(South),
  (Bournmouth)-[:IS_LOCATED_IN_THE]->(South),
  (Newcastle)-[:IS_LOCATED_IN_THE]->(North),
  (Manchester)-[:IS_LOCATED_IN_THE]->(North),
  (Liverpool)-[:IS_LOCATED_IN_THE]->(North),
  (Edinborough)-[:IS_LOCATED_IN_THE]->(North),
  (Bristol)-[:IS_LOCATED_IN_THE]->(West),
  (Cardiff)-[:IS_LOCATED_IN_THE]->(West),
  (Exeter)-[:IS_LOCATED_IN_THE]->(West),
  (Cornwall)-[:IS_LOCATED_IN_THE]->(West),
  (Exeter)-[:IS_LOCATED_IN_THE]->(East),
  (UEA)-[:IS_LOCATED_IN_THE]->(East),
  (Kent)-[:IS_LOCATED_IN_THE]->(East),
  (London)-[:IS_LOCATED_IN_THE]->(East)

//-------------SOUTH
//Portsmouth University
CREATE (Hugo:Person {name:'Hugo Weaving'})
CREATE (AndyW:Person {name:'Andy Wachowski'})
CREATE (LanaW:Person {name:'Lana Wachowski'})
CREATE (JoelS:Person {name:'Joel Silver'})
CREATE (Emil:Person {name:"Emil Eifrem"})
CREATE
  (Hugo)-[:WENT_TO]->(Portsmouth),
  (AndyW)-[:WENT_TO]->(Portsmouth),
  (LanaW)-[:WENT_TO]->(Portsmouth),
  (JoelS)-[:WENT_TO]->(Portsmouth),
  (Emil)-[:WENT_TO]->(Portsmouth)

CREATE
  (Hugo)-[:LIVES_IN_THE]->(North),
  (AndyW)-[:LIVES_IN_THE]->(South),
  (LanaW)-[:LIVES_IN_THE]->(East),
  (JoelS)-[:LIVES_IN_THE]->(West),
  (Emil)-[:LIVES_IN_THE]->(North)

CREATE
  (Hugo)-[:DISLIKES]->(Portsmouth),
  (AndyW)-[:LIKES]->(Portsmouth),
  (LanaW)-[:DISLIKES]->(Portsmouth),
  (JoelS)-[:LIKES]->(Portsmouth),
  (Emil)-[:LIKES]->(Portsmouth)

//Southampton University
CREATE (JoeJones:Person {name:'Joe Jones'})
CREATE (NickLiffen:Person {name:'Nick Liffen'})
CREATE (JamesRichmond:Person {name:'James Richmond'})
CREATE (BobMarley:Person {name:'Bob Marley'})
CREATE (ZacColley:Person {name:'Zac Colley'})
CREATE
  (JoeJones)-[:WENT_TO]->(Southampton),
  (NickLiffen)-[:WENT_TO]->(Southampton),
  (JamesRichmond)-[:WENT_TO]->(Southampton),
  (BobMarley)-[:WENT_TO]->(Southampton),
  (ZacColley)-[:WENT_TO]->(Southampton)

CREATE
  (JoeJones)-[:LIVES_IN_THE]->(North),
  (NickLiffen)-[:LIVES_IN_THE]->(South),
  (JamesRichmond)-[:LIVES_IN_THE]->(South),
  (BobMarley)-[:LIVES_IN_THE]->(West),
  (ZacColley)-[:LIVES_IN_THE]->(East)

CREATE
  (JoeJones)-[:LIKES]->(Southampton),
  (NickLiffen)-[:LIKES]->(Southampton),
  (JamesRichmond)-[:DISLIKES]->(Southampton),
  (BobMarley)-[:LIKES]->(Southampton),
  (ZacColley)-[:LIKES]->(Southampton)

//Brighton Univerity
CREATE (HandyM:Person {name:'Handy Maana'})
CREATE (AandyM:Person {name:'Aandy Maana'})
CREATE (BandyM:Person {name:'Bandy Maana'})
CREATE (PandyM:Person {name:'Pandy Maana'})
CREATE (TandyM:Person {name:'Tandy Maana'})
CREATE
  (HandyM)-[:WENT_TO]->(Brighton),
  (AandyM)-[:WENT_TO]->(Brighton),
  (BandyM)-[:WENT_TO]->(Brighton),
  (PandyM)-[:WENT_TO]->(Brighton),
  (TandyM)-[:WENT_TO]->(Brighton)

CREATE
  (HandyM)-[:LIVES_IN_THE]->(North),
  (AandyM)-[:LIVES_IN_THE]->(East),
  (BandyM)-[:LIVES_IN_THE]->(South),
  (PandyM)-[:LIVES_IN_THE]->(East),
  (TandyM)-[:LIVES_IN_THE]->(East)

CREATE
  (HandyM)-[:DISLIKES]->(Brighton),
  (AandyM)-[:LIKES]->(Brighton),
  (BandyM)-[:DISLIKES]->(Brighton),
  (PandyM)-[:LIKES]->(Brighton),
  (TandyM)-[:DISLIKES]->(Brighton)

//Bournmouth Univerity
CREATE (HandyQ:Person {name:'Handy Qaana'})
CREATE (AandyE:Person {name:'Aandy Eaana'})
CREATE (BandyT:Person {name:'Bandy Taana'})
CREATE (PandyY:Person {name:'Pandy Yaana'})
CREATE (TandyU:Person {name:'Tandy Uaana'})
CREATE
  (HandyQ)-[:WENT_TO]->(Bournmouth),
  (AandyE)-[:WENT_TO]->(Bournmouth),
  (BandyT)-[:WENT_TO]->(Bournmouth),
  (PandyY)-[:WENT_TO]->(Bournmouth),
  (TandyU)-[:WENT_TO]->(Bournmouth)


CREATE
  (HandyQ)-[:LIVES_IN_THE]->(North),
  (AandyE)-[:LIVES_IN_THE]->(North),
  (BandyT)-[:LIVES_IN_THE]->(South),
  (PandyY)-[:LIVES_IN_THE]->(South),
  (TandyU)-[:LIVES_IN_THE]->(West)

CREATE
  (HandyQ)-[:DISLIKES]->(Bournmouth),
  (AandyE)-[:LIKES]->(Bournmouth),
  (BandyT)-[:LIKES]->(Bournmouth),
  (PandyY)-[:LIKES]->(Bournmouth),
  (TandyU)-[:DISLIKES]->(Bournmouth)


//-------------NORTH
//Newcastle University
CREATE (HannahKnowles:Person {name:'Hannah Knowles'})
CREATE (TimVardy:Person {name:'Tim Vardy'})
CREATE (TomHardy:Person {name:'Tom Hardy'})
CREATE (TomHendseron:Person {name:'Tom Hendseron'})
CREATE (RobCalcroft:Person {name:'Rob Calcroft'})
CREATE
  (HannahKnowles)-[:WENT_TO]->(Newcastle),
  (TimVardy)-[:WENT_TO]->(Newcastle),
  (TomHardy)-[:WENT_TO]->(Newcastle),
  (TomHendseron)-[:WENT_TO]->(Newcastle),
  (RobCalcroft)-[:WENT_TO]->(Newcastle)

CREATE
  (HannahKnowles)-[:LIVES_IN_THE]->(South),
  (TimVardy)-[:LIVES_IN_THE]->(East),
  (TomHardy)-[:LIVES_IN_THE]->(South),
  (TomHendseron)-[:LIVES_IN_THE]->(South),
  (RobCalcroft)-[:LIVES_IN_THE]->(West)

CREATE
  (HannahKnowles)-[:LIKES]->(Newcastle),
  (TimVardy)-[:LIKES]->(Newcastle),
  (TomHardy)-[:DISLIKES]->(Newcastle),
  (TomHendseron)-[:LIKES]->(Newcastle),
  (RobCalcroft)-[:DISLIKES]->(Newcastle)

//Manchester Univerity
CREATE (HannahKnowless:Person {name:'Hannah Knowless'})
CREATE (TimVardyy:Person {name:'Tim Vardyy'})
CREATE (TomHardyy:Person {name:'Tom Hardyy'})
CREATE (TomHendseronn:Person {name:'Tom Hendseronn'})
CREATE (RobCalcroftt:Person {name:'Rob Calcroftt'})
  CREATE
  (HannahKnowless)-[:WENT_TO]->(Manchester),
  (TimVardyy)-[:WENT_TO]->(Manchester),
  (TomHardyy)-[:WENT_TO]->(Manchester),
  (TomHendseronn)-[:WENT_TO]->(Manchester),
  (RobCalcroftt)-[:WENT_TO]->(Manchester)

CREATE
  (HannahKnowless)-[:LIVES_IN_THE]->(North),
  (TimVardyy)-[:LIVES_IN_THE]->(East),
  (TomHardyy)-[:LIVES_IN_THE]->(South),
  (TomHendseronn)-[:LIVES_IN_THE]->(North),
  (RobCalcroftt)-[:LIVES_IN_THE]->(West)

CREATE
  (HannahKnowless)-[:DISLIKES]->(Manchester),
  (TimVardyy)-[:DISLIKES]->(Manchester),
  (TomHardyy)-[:DISLIKES]->(Manchester),
  (TomHendseronn)-[:LIKES]->(Manchester),
  (RobCalcroftt)-[:DISLIKES]->(Manchester)

//Liverpool Univerity
CREATE (HKnowles:Person {name:'H Knowles'})
CREATE (TVardy:Person {name:'T Vardy'})
CREATE (THardy:Person {name:'T Hardy'})
CREATE (THendseron:Person {name:'T Hendseron'})
CREATE (RCalcroft:Person {name:'R Calcroft'})
  CREATE
  (HKnowles)-[:WENT_TO]->(Liverpool),
  (TVardy)-[:WENT_TO]->(Liverpool),
  (THardy)-[:WENT_TO]->(Liverpool),
  (THendseron)-[:WENT_TO]->(Liverpool),
  (RCalcroft)-[:WENT_TO]->(Liverpool)

CREATE
  (HKnowles)-[:LIVES_IN_THE]->(North),
  (TVardy)-[:LIVES_IN_THE]->(East),
  (THardy)-[:LIVES_IN_THE]->(South),
  (THendseron)-[:LIVES_IN_THE]->(North),
  (RCalcroft)-[:LIVES_IN_THE]->(West)

CREATE
  (HKnowles)-[:LIKES]->(Liverpool),
  (TVardy)-[:DISLIKES]->(Liverpool),
  (THardy)-[:LIKES]->(Liverpool),
  (THendseron)-[:LIKES]->(Liverpool),
  (RCalcroft)-[:LIKES]->(Liverpool)

//Edinborough Univerity
CREATE (HannaherwrKnowles:Person {name:'Hannah Knowles'})
CREATE (TimVrewrardy:Person {name:'Tim Vardy'})
CREATE (TomHewrardy:Person {name:'Tom Hardy'})
CREATE (TomHrewrendseron:Person {name:'Tom Hendseron'})
CREATE (RobCrweralcroft:Person {name:'Rob Calcroft'})
CREATE
  (HannaherwrKnowles)-[:WENT_TO]->(Edinborough),
  (TimVrewrardy)-[:WENT_TO]->(Edinborough),
  (TomHewrardy)-[:WENT_TO]->(Edinborough),
  (TomHrewrendseron)-[:WENT_TO]->(Edinborough),
  (RobCrweralcroft)-[:WENT_TO]->(Edinborough)

CREATE
  (HannaherwrKnowles)-[:LIVES_IN_THE]->(South),
  (TimVrewrardy)-[:LIVES_IN_THE]->(East),
  (TomHewrardy)-[:LIVES_IN_THE]->(South),
  (TomHrewrendseron)-[:LIVES_IN_THE]->(North),
  (RobCrweralcroft)-[:LIVES_IN_THE]->(East)

CREATE
  (HannaherwrKnowles)-[:DISLIKES]->(Edinborough),
  (TimVrewrardy)-[:DISLIKES]->(Edinborough),
  (TomHewrardy)-[:LIKES]->(Edinborough),
  (TomHrewrendseron)-[:LIKES]->(Edinborough),
  (RobCrweralcroft)-[:DISLIKES]->(Edinborough)


//-------------WEST
//Bristol Univerity
CREATE (SophieClarke:Person {name:'Sophie Clarke'})
CREATE (JoshLatham:Person {name:'Josh Latham'})
CREATE (FrankieJones:Person {name:'Frankie Jones'})
CREATE (PaulOsborn:Person {name:'Paul Osborn'})
CREATE (TasSteer:Person {name:'Tas Steer'})
CREATE
  (SophieClarke)-[:WENT_TO]->(Bristol),
  (JoshLatham)-[:WENT_TO]->(Bristol),
  (FrankieJones)-[:WENT_TO]->(Bristol),
  (PaulOsborn)-[:WENT_TO]->(Bristol),
  (TasSteer)-[:WENT_TO]->(Bristol)

CREATE
  (SophieClarke)-[:LIVES_IN_THE]->(West),
  (JoshLatham)-[:LIVES_IN_THE]->(East),
  (FrankieJones)-[:LIVES_IN_THE]->(South),
  (PaulOsborn)-[:LIVES_IN_THE]->(West),
  (TasSteer)-[:LIVES_IN_THE]->(East)

CREATE
  (SophieClarke)-[:LIKES]->(Bristol),
  (JoshLatham)-[:LIKES]->(Bristol),
  (FrankieJones)-[:LIKES]->(Bristol),
  (PaulOsborn)-[:LIKES]->(Bristol),
  (TasSteer)-[:LIKES]->(Bristol)

//Cardiff Univerity
CREATE (SophieClarkeeee:Person {name:'Sophie Clarkeeee'})
CREATE (JoshLathammmm:Person {name:'Josh Lathammmm'})
CREATE (FrankieJonessss:Person {name:'Frankie Jonessss'})
CREATE (PaulOsbornnnn:Person {name:'Paul Osbornnnn'})
CREATE (TasSteerrrrr:Person {name:'Tas Steerrrrr'})
CREATE
  (SophieClarkeeee)-[:WENT_TO]->(Cardiff),
  (JoshLathammmm)-[:WENT_TO]->(Cardiff),
  (FrankieJonessss)-[:WENT_TO]->(Cardiff),
  (PaulOsbornnnn)-[:WENT_TO]->(Cardiff),
  (TasSteerrrrr)-[:WENT_TO]->(Cardiff)

CREATE
  (SophieClarkeeee)-[:LIVES_IN_THE]->(North),
  (JoshLathammmm)-[:LIVES_IN_THE]->(East),
  (FrankieJonessss)-[:LIVES_IN_THE]->(South),
  (PaulOsbornnnn)-[:LIVES_IN_THE]->(West),
  (TasSteerrrrr)-[:LIVES_IN_THE]->(North)

CREATE
  (SophieClarkeeee)-[:LIKES]->(Cardiff),
  (JoshLathammmm)-[:DISLIKES]->(Cardiff),
  (FrankieJonessss)-[:LIKES]->(Cardiff),
  (PaulOsbornnnn)-[:DISLIKES]->(Cardiff),
  (TasSteerrrrr)-[:LIKES]->(Cardiff)

//Exeter Univerity
CREATE (SClarke:Person {name:'S Clarke'})
CREATE (JLatham:Person {name:'J Latham'})
CREATE (FJones:Person {name:'F Jones'})
CREATE (POsborn:Person {name:'P Osborn'})
CREATE (TSteer:Person {name:'T Steer'})
CREATE
  (SClarke)-[:WENT_TO]->(Exeter),
  (JLatham)-[:WENT_TO]->(Exeter),
  (FJones)-[:WENT_TO]->(Exeter),
  (POsborn)-[:WENT_TO]->(Exeter),
  (TSteer)-[:WENT_TO]->(Exeter)

CREATE
  (SClarke)-[:LIVES_IN_THE]->(West),
  (JLatham)-[:LIVES_IN_THE]->(East),
  (FJones)-[:LIVES_IN_THE]->(West),
  (POsborn)-[:LIVES_IN_THE]->(West),
  (TSteer)-[:LIVES_IN_THE]->(North)

CREATE
  (SClarke)-[:DISLIKES]->(Exeter),
  (JLatham)-[:LIKES]->(Exeter),
  (FJones)-[:LIKES]->(Exeter),
  (POsborn)-[:LIKES]->(Exeter),
  (TSteer)-[:DISLIKES]->(Exeter)

//Cormall Univerity
CREATE (SophiefdfdClarke:Person {name:'Sophie Clarke'})
CREATE (JoshLafdfdtham:Person {name:'Josh Latham'})
CREATE (FrankfdfdieJones:Person {name:'Frankie Jones'})
CREATE (PaulOfdfdfsborn:Person {name:'Paul Osborn'})
CREATE (TasStfdfdeer:Person {name:'Tas Steer'})
CREATE
  (SophiefdfdClarke)-[:WENT_TO]->(Cornwall),
  (JoshLafdfdtham)-[:WENT_TO]->(Cornwall),
  (FrankfdfdieJones)-[:WENT_TO]->(Cornwall),
  (PaulOfdfdfsborn)-[:WENT_TO]->(Cornwall),
  (TasStfdfdeer)-[:WENT_TO]->(Cornwall)

CREATE
  (SophiefdfdClarke)-[:LIVES_IN_THE]->(East),
  (JoshLafdfdtham)-[:LIVES_IN_THE]->(East),
  (FrankfdfdieJones)-[:LIVES_IN_THE]->(West),
  (PaulOfdfdfsborn)-[:LIVES_IN_THE]->(East),
  (TasStfdfdeer)-[:LIVES_IN_THE]->(West)

CREATE
  (SophiefdfdClarke)-[:DISLIKES]->(Cornwall),
  (JoshLafdfdtham)-[:DISLIKES]->(Cornwall),
  (FrankfdfdieJones)-[:LIKES]->(Cornwall),
  (PaulOfdfdfsborn)-[:LIKES]->(Cornwall),
  (TasStfdfdeer)-[:DISLIKES]->(Cornwall)

//EAST

//Essex Univerity
CREATE (SamJones:Person {name:'Sam Jones'})
CREATE (ConorHalsey:Person {name:'Conor Halsey'})
CREATE (JackCrozier:Person {name:'Jack Crozier'})
CREATE (LeonPointon:Person {name:'Leon Pointon'})
CREATE (DaveClarke:Person {name:'Dave Clarke'})
CREATE
  (SamJones)-[:WENT_TO]->(Essex),
  (ConorHalsey)-[:WENT_TO]->(Essex),
  (JackCrozier)-[:WENT_TO]->(Essex),
  (LeonPointon)-[:WENT_TO]->(Essex),
  (DaveClarke)-[:WENT_TO]->(Essex)

CREATE
  (SamJones)-[:LIVES_IN_THE]->(East),
  (ConorHalsey)-[:LIVES_IN_THE]->(North),
  (JackCrozier)-[:LIVES_IN_THE]->(West),
  (LeonPointon)-[:LIVES_IN_THE]->(East),
  (DaveClarke)-[:LIVES_IN_THE]->(South)

CREATE
  (SamJones)-[:LIKES]->(Essex),
  (ConorHalsey)-[:DISLIKES]->(Essex),
  (JackCrozier)-[:LIKES]->(Essex),
  (LeonPointon)-[:LIKES]->(Essex),
  (DaveClarke)-[:LIKES]->(Essex)

//UEA Univerity
CREATE (SJones:Person {name:'S Jones'})
CREATE (CHalsey:Person {name:'C Halsey'})
CREATE (JCrozier:Person {name:'J Crozier'})
CREATE (LPointon:Person {name:'L Pointon'})
CREATE (DClarke:Person {name:'D Clarke'})
CREATE
  (SJones)-[:WENT_TO]->(UEA),
  (CHalsey)-[:WENT_TO]->(UEA),
  (JCrozier)-[:WENT_TO]->(UEA),
  (LPointon)-[:WENT_TO]->(UEA),
  (DClarke)-[:WENT_TO]->(UEA)

CREATE
  (SJones)-[:LIVES_IN_THE]->(East),
  (CHalsey)-[:LIVES_IN_THE]->(East),
  (JCrozier)-[:LIVES_IN_THE]->(West),
  (LPointon)-[:LIVES_IN_THE]->(East),
  (DClarke)-[:LIVES_IN_THE]->(West)

CREATE
  (SJones)-[:DISLIKES]->(UEA),
  (CHalsey)-[:DISLIKES]->(UEA),
  (JCrozier)-[:LIKES]->(UEA),
  (LPointon)-[:LIKES]->(UEA),
  (DClarke)-[:LIKES]->(UEA)

//Kent Univerity
CREATE (SamJoness:Person {name:'Sam Joness'})
CREATE (ConorHalseyy:Person {name:'Conor Halseyy'})
CREATE (JackCrozierr:Person {name:'Jack Crozierr'})
CREATE (LeonPointonn:Person {name:'Leon Pointonn'})
CREATE (DaveClarkee:Person {name:'Dave Clarkee'})
CREATE
  (SamJoness)-[:WENT_TO]->(Kent),
  (ConorHalseyy)-[:WENT_TO]->(Kent),
  (JackCrozierr)-[:WENT_TO]->(Kent),
  (LeonPointonn)-[:WENT_TO]->(Kent),
  (DaveClarkee)-[:WENT_TO]->(Kent)

CREATE
  (SamJoness)-[:LIVES_IN_THE]->(North),
  (ConorHalseyy)-[:LIVES_IN_THE]->(West),
  (JackCrozierr)-[:LIVES_IN_THE]->(West),
  (LeonPointonn)-[:LIVES_IN_THE]->(East),
  (DaveClarkee)-[:LIVES_IN_THE]->(South)

CREATE
  (SamJoness)-[:DISLIKES]->(Kent),
  (ConorHalseyy)-[:DISLIKES]->(Kent),
  (JackCrozierr)-[:LIKES]->(Kent),
  (LeonPointonn)-[:DISLIKES]->(Kent),
  (DaveClarkee)-[:DISLIKES]->(Kent)

//London Univerity
CREATE (SamewJones:Person {name:'Sam Jones'})
CREATE (ConorHwewalsey:Person {name:'Conor Halsey'})
CREATE (JackCewewrozier:Person {name:'Jack Crozier'})
CREATE (LeonPewewointon:Person {name:'Leon Pointon'})
CREATE (DaveeweClarke:Person {name:'Dave Clarke'})
CREATE
  (SamewJones)-[:WENT_TO]->(London),
  (ConorHwewalsey)-[:WENT_TO]->(London),
  (JackCewewrozier)-[:WENT_TO]->(London),
  (LeonPewewointon)-[:WENT_TO]->(London),
  (DaveeweClarke)-[:WENT_TO]->(London)

CREATE
  (SamewJones)-[:LIVES_IN_THE]->(East),
  (ConorHwewalsey)-[:LIVES_IN_THE]->(South),
  (JackCewewrozier)-[:LIVES_IN_THE]->(North),
  (LeonPewewointon)-[:LIVES_IN_THE]->(North),
  (DaveeweClarke)-[:LIVES_IN_THE]->(South)

CREATE
  (SamewJones)-[:LIKES]->(London),
  (ConorHwewalsey)-[:LIKES]->(London),
  (JackCewewrozier)-[:LIKES]->(London),
  (LeonPewewointon)-[:LIKES]->(London),
  (DaveeweClarke)-[:LIKES]->(London)

//Find Everything
MATCH (n) RETURN n

//Find someone in the database called "Jack Crozier"
MATCH (jack {name: "H Knowles"}) RETURN jack

//List the universities T Vardy went to.
MATCH (tom:Person {name: "T Vardy"})-[:WENT_TO]->(TUniversity) RETURN tom,TUniversity

//Who went to a Sporty university?
MATCH (sportUni:Speciality {title: "Sporty Univerity"})-[:SPECIALISES_IN]-(uni) RETURN sportUni, uni

//People related to Portsmouth university
MATCH (people:Person)-[relatedTo]-(:University {title: "Portsmouth University"}) RETURN people.name, Type(relatedTo), relatedTo

//Reccommend a university to someone who wants to go to a southen university.
MATCH (sportUni:Speciality {title: "Sporty Univerity"})-[:SPECIALISES_IN]-(uni),(uni)-[:IS_LOCATED_IN_THE]-(locality:Region{title:'East England'}) RETURN sportUni, uni, locality

// THIS WILL DELETE Everything
MATCH (n) DETACH DELETE n

//This Reccommends a University to someone who wants to go to a southen university (+brings back information about LIKES & DISLIKES)
MATCH (sportUni:Speciality {title: "Sporty Univerity"})-[:SPECIALISES_IN]-(uni)-[r]-(),
  (uni)-[:IS_LOCATED_IN_THE]-(locality:Region{title:'East England'})
    RETURN sportUni, uni, locality, type(r), count(*)

//This Reccommends a University to someone who wants to go to a southen university, only bring back likes
MATCH (sportUni:Speciality {title: "Sporty Univerity"})-[:SPECIALISES_IN]-(uni)-[:LIKES]-(),
  (uni)-[:IS_LOCATED_IN_THE]-(locality:Region{title:'East England'})
    RETURN sportUni, uni, locality, count(*) AS Likes ORDER BY Likes DESC LIMIT 1
