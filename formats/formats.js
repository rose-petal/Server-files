	//Add in custom formats
	//These are the formats for the server Prism on Pokemon Showdown
	
	// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	//Random Formats
	////////////////////////////////////////////////////////////////////

		

    {
         name: "S",
         section: "Prism Singles",
     
         ruleset: ['Pokemon', 'Standard', 'Sleep Clause Mod', 'Species Clause', 'Evasion Clause Mod'],
         banlist: ['Sould Dew'],
     
    },
	{
		name: "A",
		section: "Prism Singles",

		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Standard', 'Soul Dew', 'HP Percentage Mod', 'Species Clause'],
		banlist: ['Blaziken', 'Darkrai', 'Deoxys', 'Deoxys Attack', 'Dialga','Gengarite',  'Genesect', 'Giratina', 'Groudon', 'Ho-oh', 'Lugia', 'Lucario', 'Kyogre', 'Kyurem-W', 'Mawile', 'Mewtwo', 'Palkia', 'Kangaskhan', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom', 'Charizard', 'Landorus', 'Landorus-Therian', 'Thundurus', 'Keldeo',  'Medicham', 'Ferrothorn', 'Garchomp', 'Pinsir'],

	},
	{
		name: "Random Monotype Battle",
		section: "Random Formats",

		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Same Type Clause']
	},
	{
		name: "Random Monotype",
		section: "Random Tiers",

		mod: 'randommonotypeside',      

		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'CAP Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause']
	},
	{


custom/read.js (config.js)
