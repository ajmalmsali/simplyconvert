var conversion_types = [
		{
			id: "4_20ma",
			name: "Instrumentation 4-20mA",
			in: 4,
			out: 0,
			from: {
				name: "mA",
				id: "ma"
			},
			to: {
				name: "%",
				id: "percentage"
			},
			units: [
				{
					name: "mA",
					id: "ma"
				},
				{
					name: "%",
					id: "percentage"
				}
			],
			input_type: {
				from: {
					type: 'range',
					min: '4',
					max: '20',
					step: '1',
					size: '2'
				},
				to: {
					type: 'range',
					min: '0',
					max: '100',
					step: '1',
					size: '2'
				}
			}
		},
		{
			id: "3_15psi",
			name: "Instrumentation 3-15 PSI",
			in: 3,
			out: 0,
			from: {
				name: "PSI",
				id: "psi"
			},
			to: {
				name: "%",
				id: "percentage"
			},
			units: [
				{
					name: "PSI",
					id: "psi"
				},
				{
					name: "%",
					id: "percentage"
				}
			],
			input_type: {
				from: {
					type: 'range',
					min: '3',
					max: '15',
					step: '1',
					size: '2'
				},
				to: {
					type: 'range',
					min: '0',
					max: '100',
					step: '1',
					size: '2'
				}
			}
		},
		{
			id: "0_20ma",
			name: "Instrumentation 0-20mA",
			in: 0,
			out: 0,
			from: {
				name: "mA",
				id: "ma"
			},
			to: {
				name: "%",
				id: "percentage"
			},
			units: [
				{
					name: "mA",
					id: "ma"
				},
				{
					name: "%",
					id: "percentage"
				}
			],
			input_type: {
				from: {
					type: 'range',
					min: '0',
					max: '20',
					step: '1',
					size: '2'
				},
				to: {
					type: 'range',
					min: '0',
					max: '100',
					step: '1',
					size: '2'
				}
			}
		},
		{
			id: "0_25ma",
			name: "Instrumentation 0-25mA",
			in: 0,
			out: 0,
			from: {
				name: "mA",
				id: "ma"
			},
			to: {
				name: "%",
				id: "percentage"
			},
			units: [
				{
					name: "mA",
					id: "ma"
				},
				{
					name: "%",
					id: "percentage"
				}
			],
			input_type: {
				from: {
					type: 'range',
					min: '0',
					max: '25',
					step: '1',
					size: '2'
				},
				to: {
					type: 'range',
					min: '0',
					max: '100',
					step: '1'
				}
			}
		},
		{
			id: "temperature",
			name: "Temperature",
			from: {
				name: "Celsius",
				id: "celsius"
			},
			to: {
				name: "Fahrenheit",
				id: "fahrenheit"
			},
			units: [
				{
					name: "Celsius",
					id: "celsius"
				},
				{
					name: "Fahrenheit",
					id: "fahrenheit"
				},
				{
					name: "Kelvin",
					id: "kelvin"
				}
			]
		},
		{
			id: "length",
			name: "Length",
			from: {
				name: "Kilometer",
				id: "kilometer"
			},
			to: {
				name: "Meters",
				id: "meters"
			},
			units: [
				{
					name: "Kilometer",
					id: "kilometer"
				},
				{
					name: "Meters",
					id: "meters"
				},
				{
					name: "Centimeters",
					id: "centimeters"
				},
				{
					name: "Millimeters",
					id: "millimeters"
				},
				{
					name: "Miles",
					id: "miles"
				},
				{
					name: "Yards",
					id: "yards"
				},
				{
					name: "Feet",
					id: "feet"
				},
				{
					name: "Inches",
					id: "inches"
				},
				{
					name: "Nautical Miles",
					id: "nauticalMiles"
				}
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{
			id: "mass",
			name: "Mass",
			from: {
				name: "Metric Ton",
				id: "metricTon"
			},
			to: {
				name: "Kilogram",
				id: "kilogram"
			},
			units: [
				{
					name: "Metric Ton",
					id: "metricTon"
				},
				{
					name: "Kilogram",
					id: "kilogram"
				},
				{
					name: "Gram",
					id: "gram"
				},
				{
					name: "Milligram",
					id: "milligram"
				},
				{
					name: "Mcg",
					id: "mcg"
				},
				{
					name: "Long Ton",
					id: "longTon"
				},
				{
					name: "Short Ton",
					id: "shortTon"
				},
				{
					name: "Stones",
					id: "stones"
				},
				{
					name: "Pound",
					id: "pound"
				},
				{
					name: "Ounce",
					id: "ounce"
				}
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "speed",
			name: "Speed",
			from: {
				name: "Miles/Hour",
				id: "milesHour"
			},
			to: {
				name: "Feet/Sec",
				id: "feetSec"
			},
			units: [
				{
					name: "Miles/Hour",
					id: "milesHour"
				},
				{
					name: "Feet/Sec",
					id: "feetSec"
				},
				{
					name: "Meters/Sec",
					id: "metersSec"
				},
				{
					name: "Km/Hour",
					id: "kmHour"
				},
				{
					name: "Knots",
					id: "knots"
				}
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "volume",
			name: "Volume",
			from: {
				name: "US Gal",
				id: "usGal"
			},
			to: {
				name: "US Quart",
				id: "usQuart"
			},
			units: [
			    {
			      "name": "US Gal",
			      "id": "usGal"
			    },
			    {
			      "name": "US Quart",
			      "id": "usQuart"
			    },
			    {
			      "name": "US Pint",
			      "id": "usPint"
			    },
			    {
			      "name": "US Cup",
			      "id": "usCup"
			    },
			    {
			      "name": "US Oz",
			      "id": "usOz"
			    },
			    {
			      "name": "US Tbsp.",
			      "id": "usTbsp"
			    },
			    {
			      "name": "US Tsp.",
			      "id": "usTsp"
			    },
			    {
			      "name": "Cubic Meter",
			      "id": "cubicMeter"
			    },
			    {
			      "name": "Liters",
			      "id": "liters"
			    },
			    {
			      "name": "Milliliter",
			      "id": "milliliter"
			    },
			    {
			      "name": "Imperial Gal",
			      "id": "imperialGal"
			    },
			    {
			      "name": "Imperial Quart",
			      "id": "imperialQuart"
			    },
			    {
			      "name": "Imperial Pint",
			      "id": "imperialPint"
			    },
			    {
			      "name": "Imperial Oz",
			      "id": "imperialOz"
			    },
			    {
			      "name": "Imperial Tbsp.",
			      "id": "imperialTbsp"
			    },
			    {
			      "name": "Imperial Tsp.",
			      "id": "imperialTsp"
			    },
			    {
			      "name": "Cubic Foot",
			      "id": "cubicFoot"
			    },
			    {
			      "name": "Cubic Inch",
			      "id": "cubicInch"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "area",
			name: "Area",
			from: {
				name: "Square Km",
				id: "squareKm"
			},
			to: {
				name: "Hectare",
				id: "hectare"
			},
			units: [
			    {
			      "name": "Square Km",
			      "id": "squareKm"
			    },
			    {
			      "name": "Hectare",
			      "id": "hectare"
			    },
			    {
			      "name": "Square Meter",
			      "id": "squareMeter"
			    },
			    {
			      "name": "Square Mile",
			      "id": "squareMile"
			    },
			    {
			      "name": "Acre",
			      "id": "acre"
			    },
			    {
			      "name": "Square Yard",
			      "id": "squareYard"
			    },
			    {
			      "name": "Square Foot",
			      "id": "squareFoot"
			    },
			    {
			      "name": "Square Inch",
			      "id": "squareInch"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "fuel_consumption",
			name: "Fuel Consumption",
			from: {
				name: "MPG (US)",
				id: "mpgUs"
			},
			to: {
				name: "MPG (imp.)",
				id: "mpgImp"
			},
			units: [
			    {
			      "name": "MPG (US)",
			      "id": "mpgUs"
			    },
			    {
			      "name": "MPG (imp.)",
			      "id": "mpgImp"
			    },
			    {
			      "name": "Km\/Liter",
			      "id": "kmLiter"
			    },
			    {
			      "name": "Liter\/100km",
			      "id": "liter100km"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "time",
			name: "Time",
			from: {
				name: "Nanoseconds",
				id: "nanoseconds"
			},
			to: {
				name: "Microseconds",
				id: "microseconds"
			},
			units: [
			    {
			      "name": "Nanoseconds",
			      "id": "nanoseconds"
			    },
			    {
			      "name": "Microseconds",
			      "id": "microseconds"
			    },
			    {
			      "name": "Milliseconds",
			      "id": "milliseconds"
			    },
			    {
			      "name": "Seconds",
			      "id": "seconds"
			    },
			    {
			      "name": "Minutes",
			      "id": "minutes"
			    },
			    {
			      "name": "Hours",
			      "id": "hours"
			    },
			    {
			      "name": "Days",
			      "id": "days"
			    },
			    {
			      "name": "Weeks",
			      "id": "weeks"
			    },
			    {
			      "name": "Months",
			      "id": "months"
			    },
			    {
			      "name": "Years",
			      "id": "years"
			    },
			    {
			      "name": "Decades",
			      "id": "decades"
			    },
			    {
			      "name": "Century",
			      "id": "century"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "digital_storage",
			name: "Digital Storage",
			from: {
				name: "Bits",
				id: "bits"
			},
			to: {
				name: "Bytes",
				id: "bytes"
			},
			units: [
			    {
			      "name": "Bits",
			      "id": "bits"
			    },
			    {
			      "name": "Bytes",
			      "id": "bytes"
			    },
			    {
			      "name": "Kilobits",
			      "id": "kilobits"
			    },
			    {
			      "name": "Kilobytes",
			      "id": "kilobytes"
			    },
			    {
			      "name": "Megabits",
			      "id": "megabits"
			    },
			    {
			      "name": "Megabytes",
			      "id": "megabytes"
			    },
			    {
			      "name": "Gigabits",
			      "id": "gigabits"
			    },
			    {
			      "name": "Gigabytes",
			      "id": "gigabytes"
			    },
			    {
			      "name": "Terabits",
			      "id": "terabits"
			    },
			    {
			      "name": "Terabytes",
			      "id": "terabytes"
			    },
			    {
			      "name": "Petabits",
			      "id": "petabits"
			    },
			    {
			      "name": "Petabytes",
			      "id": "petabytes"
			    },
			    {
			      "name": "Exabits",
			      "id": "exabits"
			    },
			    {
			      "name": "Exabytes",
			      "id": "exabytes"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "energy",
			name: "Energy",
			from: {
				name: "Btu (th)",
				id: "btuTh"
			},
			to: {
				name: "Btu (mean)",
				id: "btuMean"
			},
			units: [
			    {
			      "name": "Btu (th)",
			      "id": "btuTh"
			    },
			    {
			      "name": "Btu (mean)",
			      "id": "btuMean"
			    },
			    {
			      "name": "Calories (IT)",
			      "id": "caloriesIt"
			    },
			    {
			      "name": "Calories (th)",
			      "id": "caloriesTh"
			    },
			    {
			      "name": "Calories (mean)",
			      "id": "caloriesMean"
			    },
			    {
			      "name": "Calories (15C)",
			      "id": "calories15c"
			    },
			    {
			      "name": "Calories (20C)",
			      "id": "calories20c"
			    },
			    {
			      "name": "Calories (food)",
			      "id": "caloriesFood"
			    },
			    {
			      "name": "Centigrade Heat Units",
			      "id": "centigradeHeatUnits"
			    },
			    {
			      "name": "Electron Volts",
			      "id": "electronVolts"
			    },
			    {
			      "name": "Ergs",
			      "id": "ergs"
			    },
			    {
			      "name": "Foot-Pound Force",
			      "id": "footPoundForce"
			    },
			    {
			      "name": "Foot Poundals",
			      "id": "footPoundals"
			    },
			    {
			      "name": "Gigajoules",
			      "id": "gigajoules"
			    },
			    {
			      "name": "Horsepower Hours",
			      "id": "horsepowerHours"
			    },
			    {
			      "name": "Inch-Pound Force",
			      "id": "inchPoundForce"
			    },
			    {
			      "name": "Joules",
			      "id": "joules"
			    },
			    {
			      "name": "Kilocalories (IT)",
			      "id": "kilocaloriesIt"
			    },
			    {
			      "name": "Kilocalories (th)",
			      "id": "kilocaloriesTh"
			    },
			    {
			      "name": "Kilogram-Force Meters",
			      "id": "kilogramForceMeters"
			    },
			    {
			      "name": "Kilojoules",
			      "id": "kilojoules"
			    },
			    {
			      "name": "Kilowatt Hours",
			      "id": "kilowattHours"
			    },
			    {
			      "name": "Megajoules",
			      "id": "megajoules"
			    },
			    {
			      "name": "Newton Meters",
			      "id": "newtonMeters"
			    },
			    {
			      "name": "Therms",
			      "id": "therms"
			    },
			    {
			      "name": "Watt Seconds",
			      "id": "wattSeconds"
			    },
			    {
			      "name": "Watt Hours",
			      "id": "wattHours"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "power",
			name: "Power",
			from: {
				name: "Watts",
				id: "watts"
			},
			to: {
				name: "Kilowatts",
				id: "kilowatts"
			},
			units: [
			    {
			      "name": "Watts",
			      "id": "watts"
			    },
			    {
			      "name": "Kilowatts",
			      "id": "kilowatts"
			    },
			    {
			      "name": "Megawatts",
			      "id": "megawatts"
			    },
			    {
			      "name": "Gigawatts",
			      "id": "gigawatts"
			    },
			    {
			      "name": "Btu\/Hour",
			      "id": "btuHour"
			    },
			    {
			      "name": "Btu\/Minute",
			      "id": "btuMinute"
			    },
			    {
			      "name": "Btu\/Second",
			      "id": "btuSecond"
			    },
			    {
			      "name": "Calories(th)\/Hour",
			      "id": "caloriesthHour"
			    },
			    {
			      "name": "Calories(th)\/Minute",
			      "id": "caloriesthMinute"
			    },
			    {
			      "name": "Calories(th)\/Second",
			      "id": "caloriesthSecond"
			    },
			    {
			      "name": "Kilocalories(th)\/Hour",
			      "id": "kilocaloriesthHour"
			    },
			    {
			      "name": "Kilocalories(th)\/Minute",
			      "id": "kilocaloriesthMinute"
			    },
			    {
			      "name": "Foot Pounds-Force\/Minute",
			      "id": "footPoundsForceMinute"
			    },
			    {
			      "name": "Foot Pounds-Force\/Second",
			      "id": "footPoundsForceSecond"
			    },
			    {
			      "name": "Horsepowers (electric)",
			      "id": "horsepowersElectric"
			    },
			    {
			      "name": "Horsepowers (international)",
			      "id": "horsepowersInternational"
			    },
			    {
			      "name": "Horsepowers (water)",
			      "id": "horsepowersWater"
			    },
			    {
			      "name": "Horsepowers (metric)",
			      "id": "horsepowersMetric"
			    },
			    {
			      "name": "Joules\/Hour",
			      "id": "joulesHour"
			    },
			    {
			      "name": "Joules\/Minute",
			      "id": "joulesMinute"
			    },
			    {
			      "name": "Joules\/Second",
			      "id": "joulesSecond"
			    },
			    {
			      "name": "Kilogram-Force Meters\/Hour",
			      "id": "kilogramForceMetersHour"
			    },
			    {
			      "name": "Kilogram-Force Meters\/Minute",
			      "id": "kilogramForceMetersMinute"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "force",
			name: "Force",
			from: {
				name: "Newtons",
				id: "newtons"
			},
			to: {
				name: "Kilonewtons",
				id: "kilonewtons"
			},
			units: [
			    {
			      "name": "Newtons",
			      "id": "newtons"
			    },
			    {
			      "name": "Kilonewtons",
			      "id": "kilonewtons"
			    },
			    {
			      "name": "Meganewtons",
			      "id": "meganewtons"
			    },
			    {
			      "name": "Dynes",
			      "id": "dynes"
			    },
			    {
			      "name": "Kilograms Force",
			      "id": "kilogramsForce"
			    },
			    {
			      "name": "Kips",
			      "id": "kips"
			    },
			    {
			      "name": "Pounds Force",
			      "id": "poundsForce"
			    },
			    {
			      "name": "Poundals",
			      "id": "poundals"
			    },
			    {
			      "name": "Sthenes (=kN)",
			      "id": "sthenes=kn"
			    },
			    {
			      "name": "Tonnes Force",
			      "id": "tonnesForce"
			    },
			    {
			      "name": "Tons Force (UK)",
			      "id": "tonsForceUk"
			    },
			    {
			      "name": "Tons Force (US)",
			      "id": "tonsForceUs"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		},
		{ 
			id: "electric_current",
			name: "Electric Current",
			from: {
				name: "Abampere",
				id: "abampere"
			},
			to: {
				name: "Ampere",
				id: "ampere"
			},
			units: [
			    {
			      "name": "Abampere",
			      "id": "abampere"
			    },
			    {
			      "name": "Ampere",
			      "id": "ampere"
			    },
			    {
			      "name": "Biot",
			      "id": "biot"
			    },
			    {
			      "name": "Centiampere",
			      "id": "centiampere"
			    },
			    {
			      "name": "Coulomb\/Second",
			      "id": "coulombSecond"
			    },
			    {
			      "name": "EMU Of Current",
			      "id": "emuOfCurrent"
			    },
			    {
			      "name": "ESU Of Current",
			      "id": "esuOfCurrent"
			    },
			    {
			      "name": "Franklin\/Second",
			      "id": "franklinSecond"
			    },
			    {
			      "name": "Gaussian Electric Current",
			      "id": "gaussianElectricCurrent"
			    },
			    {
			      "name": "Gigaampere",
			      "id": "gigaampere"
			    },
			    {
			      "name": "Gilbert",
			      "id": "gilbert"
			    },
			    {
			      "name": "Kiloampere",
			      "id": "kiloampere"
			    },
			    {
			      "name": "Megaampere",
			      "id": "megaampere"
			    },
			    {
			      "name": "Microampere",
			      "id": "microampere"
			    },
			    {
			      "name": "Milliampere",
			      "id": "milliampere"
			    },
			    {
			      "name": "Milliamp",
			      "id": "milliamp"
			    },
			    {
			      "name": "Manoampere",
			      "id": "manoampere"
			    },
			    {
			      "name": "Picoampere",
			      "id": "picoampere"
			    },
			    {
			      "name": "Siemens Volt",
			      "id": "siemensVolt"
			    },
			    {
			      "name": "Statampere",
			      "id": "statampere"
			    },
			    {
			      "name": "Teraampere",
			      "id": "teraampere"
			    },
			    {
			      "name": "Volt\/Ohm",
			      "id": "voltOhm"
			    },
			    {
			      "name": "Watt\/Volt",
			      "id": "wattVolt"
			    },
			    {
			      "name": "Weber\/Henry",
			      "id": "weberHenry"
			    }
			],
			input_type: {
				from: {
					type: 'tel'
				},
				to: {
					type: 'tel'
				}
			}
		}
	];

conversion_types.forEach(function(conversion_type)
{ 
	units = ""; 
	conversion_type.units.forEach(function(unit)
	{ 
		units = units+unit.name+'('+unit.id+')'+',';
	}); 
	print(conversion_type.name+units); 
});