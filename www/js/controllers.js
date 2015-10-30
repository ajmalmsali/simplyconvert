angular.module('app.controllers', [])
  .controller('convertCtrl', ['$scope', function($scope) {

  	$scope.range_form = function(attr){
  		if($scope.form.current_conversion.input_type !== undefined){
	  		if(attr == 'from' && ($scope.form.current_conversion.input_type.from.type == 'range')){
	  			return true;
	  		}
	  		else if(attr == 'to' && ($scope.form.current_conversion.input_type.to.type == 'range')){
	  			return true;
	  		}
	  		else
	  			return false;
  		}
  		else
  			return false;
  	}
  	// $scope.prepare_form = function(attr){

  	// 	form_type_defined = $scope.form.current_conversion.input_type;
  	// 	if(form_type_defined != undefined){
  	// 		form_type_from = form_type_defined.from;
  	// 		form_type_to = form_type_defined.to;

  	// 		if(attr == 'from_type'){
  	// 			return form_type_from.type;
  	// 		}
  	// 		else if(attr == 'to_type'){
  	// 			return form_type_to.type;
  	// 		}
  	// 		else if(attr == 'from_type_min'){
  	// 			return form_type_from.min;
  	// 		}
  	// 		else if(attr == 'from_type_max'){
  	// 			return form_type_from.max;
  	// 		}
  	// 		else if(attr == 'from_type_step'){
  	// 			return form_type_from.step;
  	// 		}
  	// 		else if(attr == 'to_type_min'){
  	// 			return form_type_to.min;
  	// 		}
  	// 		else if(attr == 'to_type_max'){
  	// 			return form_type_to.max;
  	// 		}
  	// 		else if(attr == 'to_type_step'){
  	// 			return form_type_to.step;
  	// 		}
  	// 		else{
  	// 			return;
  	// 		}
  	// 	}
  	// 	else{
  	// 		if(attr == 'from_type'){
  	// 			return "tel";
  	// 		}
  	// 		else if(attr == 'to_type'){
  	// 			return "tel";
  	// 		}
  	// 		// else if(attr == 'from_type_min'){
  	// 		// 	return;
  	// 		// }
  	// 		// else if(attr == 'from_type_max'){
  	// 		// 	return;
  	// 		// }
  	// 		// else if(attr == 'to_type_min'){
  	// 		// 	return;
  	// 		// }
  	// 		// else if(attr == 'to_type_max'){
  	// 		// 	return;
  	// 		// }
  	// 		else{
  	// 			return;
  	// 		}
  	// 	}
  	// }

  	$scope.prepare_form = function(attr, conv_unit){

  		current_conv = $scope.form.current_conversion;
  		current_conv_type = current_conv.id;
  		current_conv_from = current_conv.from.id;
  		current_conv_to = current_conv.to.id;

  		conv_type_obj = $scope.conversions[current_conv_type];
  		conv_unit_obj = conv_type_obj[conv_unit];

  		console.log("attr:"+attr+"conv_unit:"+conv_unit)
  		console.log(conv_unit_obj)
		if(attr == 'min'){
			if(conv_unit_obj.min !== undefined)
				ret = conv_unit_obj.min
			else
				ret = 0;
		}
		else if(attr == 'max'){
			if(conv_unit_obj.max !== undefined)
				ret = conv_unit_obj.max
			else
				ret = 0;
		}
		else if(attr == 'step'){
			if(conv_unit_obj.step !== undefined)
				ret = conv_unit_obj.step
			else
				ret = 0;
		}
		else{
			ret = null;
		}
		console.log(ret);
		return ret;
  	}

	$scope.conversion_types = [
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

	$scope.conversions = {
		"4_20ma": {
			"ma": {
				"scale": function(value) {
					return ((value - 4)/(.16));
				},
				"scaleFrom": function(value) {
					return ((.16*value)+4);
				},
				"symbol": "",
				"name": "mA",
				"min": "4",
				"max": "20",
				"step": "1"
			},
			"percentage": {
				"scale": 1,
				"symbol": "",
				"name": "%",
				"min": "0",
				"max": "100",
				"step": "1"
			}
		},
		"3_15psi": {
			"psi": {
				"scale": function(value) {
					return ((value - 3)/(.12));
				},
				"scaleFrom": function(value) {
					return ((.12*value)+3);
				},
				"symbol": "",
				"name": "PSI",
				"min": "3",
				"max": "15",
				"step": "1"
			},
			"percentage": {
				"scale": 1,
				"symbol": "",
				"name": "%",
				"min": "0",
				"max": "100",
				"step": "1"
			}
		},
		"0_20ma": {
			"ma": {
				"scale": function(value) {
					return (value/.2);
				},
				"scaleFrom": function(value) {
					return (.2*value);
				},
				"symbol": "",
				"name": "mA",
				"min": "0",
				"max": "20",
				"step": "1"
			},
			"percentage": {
				"scale": 1,
				"symbol": "",
				"name": "%",
				"min": "0",
				"max": "100",
				"step": "1"
			}
		},
		"0_25ma": {
			"ma": {
				"scale": function(value) {
					return (value/.25);
				},
				"scaleFrom": function(value) {
					return (.25*value);
				},
				"symbol": "",
				"name": "mA",
				"min": "0",
				"max": "25",
				"step": "1"
			},
			"percentage": {
				"scale": 1,
				"symbol": "",
				"name": "%",
				"min": "0",
				"max": "100",
				"step": "1"
			}
		},
		"temperature": {
			"celsius": {
				"scale": function(value) {
					return (value + 273.15);
				},
				"scaleFrom": function(value) {
					return (value - 273.15);
				},
				"symbol": "",
				"name": "Celsius"
			},
			"fahrenheit": {
				"scale": function(value) {
					return (5 / 9 * (value + 459.67));
				},
				"scaleFrom": function(value) {
					return (9 / 5 * value - 459.67);
				},
				"symbol": "",
				"name": "Fahrenheit"
			},
			"kelvin": {
				"scale": 1,
				"symbol": "",
				"name": "Kelvin"
			}
		},
		"length": {
			"kilometer": {
				"scale": 1000,
				"symbol": "",
				"name": "Kilometer"
			},
			"meters": {
				"scale": 1,
				"symbol": "",
				"name": "Meters"
			},
			"centimeters": {
				"scale": 0.01,
				"symbol": "",
				"name": "Centimeters"
			},
			"millimeters": {
				"scale": 0.001,
				"symbol": "",
				"name": "Millimeters"
			},
			"miles": {
				"scale": 1609.344,
				"symbol": "",
				"name": "Miles"
			},
			"yards": {
				"scale": 0.9144,
				"symbol": "",
				"name": "Yards"
			},
			"feet": {
				"scale": 0.3048006096012192,
				"symbol": "",
				"name": "Feet"
			},
			"inches": {
				"scale": 0.0254,
				"symbol": "",
				"name": "Inches"
			},
			"nauticalMiles": {
				"scale": 1852,
				"symbol": "",
				"name": "Nautical Miles"
			}
		},
		"mass": {
			"metricTon": {
				"scale": 1000,
				"symbol": "",
				"name": "Metric Ton"
			},
			"kilogram": {
				"scale": 1,
				"symbol": "",
				"name": "Kilogram"
			},
			"gram": {
				"scale": 0.001,
				"symbol": "",
				"name": "Gram"
			},
			"milligram": {
				"scale": 0.000001,
				"symbol": "",
				"name": "Milligram"
			},
			"mcg": {
				"scale": 1e-9,
				"symbol": "",
				"name": "Mcg"
			},
			"longTon": {
				"scale": 1016.0469088,
				"symbol": "",
				"name": "Long Ton"
			},
			"shortTon": {
				"scale": 907.18474,
				"symbol": "",
				"name": "Short Ton"
			},
			"stones": {
				"scale": 6.35029318,
				"symbol": "",
				"name": "Stones"
			},
			"pound": {
				"scale": 0.45359237,
				"symbol": "",
				"name": "Pound"
			},
			"ounce": {
				"scale": 0.028349523125,
				"symbol": "",
				"name": "Ounce"
			}
		},
		"speed": {
			"milesHour": {
				"scale": 0.44704,
				"symbol": "",
				"name": "Miles/Hour"
			},
			"feetSec": {
				"scale": 0.3048,
				"symbol": "",
				"name": "Feet/Sec"
			},
			"metersSec": {
				"scale": 1,
				"symbol": "",
				"name": "Meters/Sec"
			},
			"kmHour": {
				"scale": 0.2777777777777778,
				"symbol": "",
				"name": "Km/Hour"
			},
			"knots": {
				"scale": 0.5144444444444445,
				"symbol": "",
				"name": "Knots"
			}
		},
		"volume": {
			"usGal": {
				"scale": 3.785411784,
				"symbol": "",
				"name": "US Gal"
			},
			"usQuart": {
				"scale": 0.946352946,
				"symbol": "",
				"name": "US Quart"
			},
			"usPint": {
				"scale": 0.473176473,
				"symbol": "",
				"name": "US Pint"
			},
			"usCup": {
				"scale": 0.2365882365,
				"symbol": "",
				"name": "US Cup"
			},
			"usOz": {
				"scale": 0.0295735295625,
				"symbol": "",
				"name": "US Oz"
			},
			"usTbsp": {
				"scale": 0.01478676478125,
				"symbol": "",
				"name": "US Tbsp."
			},
			"usTsp": {
				"scale": 0.00492892159375,
				"symbol": "",
				"name": "US Tsp."
			},
			"cubicMeter": {
				"scale": 1000,
				"symbol": "",
				"name": "Cubic Meter"
			},
			"liters": {
				"scale": 1,
				"symbol": "",
				"name": "Liters"
			},
			"milliliter": {
				"scale": 0.001,
				"symbol": "",
				"name": "Milliliter"
			},
			"imperialGal": {
				"scale": 4.54609,
				"symbol": "",
				"name": "Imperial Gal"
			},
			"imperialQuart": {
				"scale": 1.1365225,
				"symbol": "",
				"name": "Imperial Quart"
			},
			"imperialPint": {
				"scale": 0.56826125,
				"symbol": "",
				"name": "Imperial Pint"
			},
			"imperialOz": {
				"scale": 0.0284130625,
				"symbol": "",
				"name": "Imperial Oz"
			},
			"imperialTbsp": {
				"scale": 0.0177582,
				"symbol": "",
				"name": "Imperial Tbsp."
			},
			"imperialTsp": {
				"scale": 0.00591939,
				"symbol": "",
				"name": "Imperial Tsp."
			},
			"cubicFoot": {
				"scale": 28.316846592,
				"symbol": "",
				"name": "Cubic Foot"
			},
			"cubicInch": {
				"scale": 0.016387064,
				"symbol": "",
				"name": "Cubic Inch"
			}
		},
		"area": {
			"squareKm": {
				"scale": 1000000,
				"symbol": "",
				"name": "Square Km"
			},
			"hectare": {
				"scale": 10000,
				"symbol": "",
				"name": "Hectare"
			},
			"squareMeter": {
				"scale": 1,
				"symbol": "",
				"name": "Square Meter"
			},
			"squareMile": {
				"scale": 2589988.110336,
				"symbol": "",
				"name": "Square Mile"
			},
			"acre": {
				"scale": 4046.8564224,
				"symbol": "",
				"name": "Acre"
			},
			"squareYard": {
				"scale": 0.83612736,
				"symbol": "",
				"name": "Square Yard"
			},
			"squareFoot": {
				"scale": 0.09290304,
				"symbol": "",
				"name": "Square Foot"
			},
			"squareInch": {
				"scale": 0.00064516,
				"symbol": "",
				"name": "Square Inch"
			}
		},
		"fuel_consumption": {
			"mpgUs": {
				"scale": function(value) {
					return 2.3521458333333333333333333333333e-3 / value;
				},
				"scaleFrom" : function(value) {
					return 2.3521458333333333333333333333333e-3 / value;
				},
				"symbol": "",
				"name": "MPG (US)"
			},
			"mpgImp": {
				"scale": function(value) {
					return 2.8248093633182215859381213711925e-3 / value;
				},
				"scaleFrom": function(value) {
					return 2.8248093633182215859381213711925e-3 / value;
				},
				"symbol": "",
				"name": "MPG (imp.)"
			},
			"kmLiter": {
				"scale": function(value) {
					return 0.001 / value;
				},
				"scaleFrom": function(value) {
					return 0.001 / value;
				},
				"symbol": "",
				"name": "Km/Liter"
			},
			"liter100km": {
				"scale": 0.00001,
				"symbol": "",
				"name": "Liter/100km"
			}
		},
		"time": {
			"nanoseconds": {
				"scale": 1e-9,
				"symbol": "",
				"name": "Nanoseconds"
			},
			"microseconds": {
				"scale": 0.000001,
				"symbol": "",
				"name": "Microseconds"
			},
			"milliseconds": {
				"scale": 0.001,
				"symbol": "",
				"name": "Milliseconds"
			},
			"seconds": {
				"scale": 1,
				"symbol": "",
				"name": "Seconds"
			},
			"minutes": {
				"scale": 60,
				"symbol": "",
				"name": "Minutes"
			},
			"hours": {
				"scale": 3600,
				"symbol": "",
				"name": "Hours"
			},
			"days": {
				"scale": 86400,
				"symbol": "",
				"name": "Days"
			},
			"weeks": {
				"scale": 604800,
				"symbol": "",
				"name": "Weeks"
			},
			"months": {
				"scale": 2628000,
				"symbol": "",
				"name": "Months"
			},
			"years": {
				"scale": 31536000,
				"symbol": "",
				"name": "Years"
			},
			"decades": {
				"scale": 315360000,
				"symbol": "",
				"name": "Decades"
			},
			"century": {
				"scale": 3.1689e-10,
				"symbol": "",
				"name": "Century"
			}
		},
		"digital_storage": {
			"bits": {
				"scale": 0.125,
				"symbol": "",
				"name": "Bits"
			},
			"bytes": {
				"scale": 1,
				"symbol": "",
				"name": "Bytes"
			},
			"kilobits": {
				"scale": 128,
				"symbol": "",
				"name": "Kilobits"
			},
			"kilobytes": {
				"scale": 1024,
				"symbol": "",
				"name": "Kilobytes"
			},
			"megabits": {
				"scale": 131072,
				"symbol": "",
				"name": "Megabits"
			},
			"megabytes": {
				"scale": 1048576,
				"symbol": "",
				"name": "Megabytes"
			},
			"gigabits": {
				"scale": 134217728,
				"symbol": "",
				"name": "Gigabits"
			},
			"gigabytes": {
				"scale": 1073741824,
				"symbol": "",
				"name": "Gigabytes"
			},
			"terabits": {
				"scale": 137438953472,
				"symbol": "",
				"name": "Terabits"
			},
			"terabytes": {
				"scale": 1099511627776,
				"symbol": "",
				"name": "Terabytes"
			},
			"petabits": {
				"scale": 140737488355328,
				"symbol": "",
				"name": "Petabits"
			},
			"petabytes": {
				"scale": 1125899906842624,
				"symbol": "",
				"name": "Petabytes"
			},
			"exabits": {
				"scale": 144115188075855870,
				"symbol": "",
				"name": "Exabits"
			},
			"exabytes": {
				"scale": 1152921504606847000,
				"symbol": "",
				"name": "Exabytes"
			}
		},
		"energy": {
			"btuTh": {
				"scale": 1054.35,
				"symbol": "",
				"name": "Btu (th)"
			},
			"btuMean": {
				"scale": 1055.87,
				"symbol": "",
				"name": "Btu (mean)"
			},
			"caloriesIt": {
				"scale": 4.1868,
				"symbol": "",
				"name": "Calories (IT)"
			},
			"caloriesTh": {
				"scale": 4.184,
				"symbol": "",
				"name": "Calories (th)"
			},
			"caloriesMean": {
				"scale": 4.19002,
				"symbol": "",
				"name": "Calories (mean)"
			},
			"calories15c": {
				"scale": 4.1858,
				"symbol": "",
				"name": "Calories (15C)"
			},
			"calories20c": {
				"scale": 4.1819,
				"symbol": "",
				"name": "Calories (20C)"
			},
			"caloriesFood": {
				"scale": 4186,
				"symbol": "",
				"name": "Calories (food)"
			},
			"centigradeHeatUnits": {
				"scale": 1900.4,
				"symbol": "",
				"name": "Centigrade Heat Units"
			},
			"electronVolts": {
				"scale": 1.60219e-19,
				"symbol": "",
				"name": "Electron Volts"
			},
			"ergs": {
				"scale": 1e-7,
				"symbol": "",
				"name": "Ergs"
			},
			"footPoundForce": {
				"scale": 1.3558179483314003,
				"symbol": "",
				"name": "Foot-Pound Force"
			},
			"footPoundals": {
				"scale": 0.04214,
				"symbol": "",
				"name": "Foot Poundals"
			},
			"gigajoules": {
				"scale": 1000000000,
				"symbol": "",
				"name": "Gigajoules"
			},
			"horsepowerHours": {
				"scale": 2684520,
				"symbol": "",
				"name": "Horsepower Hours"
			},
			"inchPoundForce": {
				"scale": 0.11298482902761668,
				"symbol": "",
				"name": "Inch-Pound Force"
			},
			"joules": {
				"scale": 1,
				"symbol": "",
				"name": "Joules"
			},
			"kilocaloriesIt": {
				"scale": 4186.8,
				"symbol": "",
				"name": "Kilocalories (IT)"
			},
			"kilocaloriesTh": {
				"scale": 4184,
				"symbol": "",
				"name": "Kilocalories (th)"
			},
			"kilogramForceMeters": {
				"scale": 9.80665,
				"symbol": "",
				"name": "Kilogram-Force Meters"
			},
			"kilojoules": {
				"scale": 1000,
				"symbol": "",
				"name": "Kilojoules"
			},
			"kilowattHours": {
				"scale": 3600000,
				"symbol": "",
				"name": "Kilowatt Hours"
			},
			"megajoules": {
				"scale": 1000000,
				"symbol": "",
				"name": "Megajoules"
			},
			"newtonMeters": {
				"scale": 1,
				"symbol": "",
				"name": "Newton Meters"
			},
			"therms": {
				"scale": 105505585.257348,
				"symbol": "",
				"name": "Therms"
			},
			"wattSeconds": {
				"scale": 1,
				"symbol": "",
				"name": "Watt Seconds"
			},
			"wattHours": {
				"scale": 3600,
				"symbol": "",
				"name": "Watt Hours"
			}
		},
		"power": {
			"watts": {
				"scale": 1,
				"symbol": "",
				"name": "Watts"
			},
			"kilowatts": {
				"scale": 1000,
				"symbol": "",
				"name": "Kilowatts"
			},
			"megawatts": {
				"scale": 1000000,
				"symbol": "",
				"name": "Megawatts"
			},
			"gigawatts": {
				"scale": 1000000000,
				"symbol": "",
				"name": "Gigawatts"
			},
			"btuHour": {
				"scale": 0.293071,
				"symbol": "",
				"name": "Btu/Hour"
			},
			"btuMinute": {
				"scale": 17.584267,
				"symbol": "",
				"name": "Btu/Minute"
			},
			"btuSecond": {
				"scale": 1055.056,
				"symbol": "",
				"name": "Btu/Second"
			},
			"caloriesthHour": {
				"scale": 0.001162222222222222,
				"symbol": "",
				"name": "Calories(th)/Hour"
			},
			"caloriesthMinute": {
				"scale": 0.06973333333333333,
				"symbol": "",
				"name": "Calories(th)/Minute"
			},
			"caloriesthSecond": {
				"scale": 4.184,
				"symbol": "",
				"name": "Calories(th)/Second"
			},
			"kilocaloriesthHour": {
				"scale": 1.1622222222222223,
				"symbol": "",
				"name": "Kilocalories(th)/Hour"
			},
			"kilocaloriesthMinute": {
				"scale": 69.73333333333333,
				"symbol": "",
				"name": "Kilocalories(th)/Minute"
			},
			"footPoundsForceMinute": {
				"scale": 0.022597,
				"symbol": "",
				"name": "Foot Pounds-Force/Minute"
			},
			"footPoundsForceSecond": {
				"scale": 1.35582,
				"symbol": "",
				"name": "Foot Pounds-Force/Second"
			},
			"horsepowersElectric": {
				"scale": 746,
				"symbol": "",
				"name": "Horsepowers (electric)"
			},
			"horsepowersInternational": {
				"scale": 745.6998715822702,
				"symbol": "",
				"name": "Horsepowers (international)"
			},
			"horsepowersWater": {
				"scale": 746.043,
				"symbol": "",
				"name": "Horsepowers (water)"
			},
			"horsepowersMetric": {
				"scale": 735.4988,
				"symbol": "",
				"name": "Horsepowers (metric)"
			},
			"joulesHour": {
				"scale": 0.0002777777777777778,
				"symbol": "",
				"name": "Joules/Hour"
			},
			"joulesMinute": {
				"scale": 0.016666666666666666,
				"symbol": "",
				"name": "Joules/Minute"
			},
			"joulesSecond": {
				"scale": 1,
				"symbol": "",
				"name": "Joules/Second"
			},
			"kilogramForceMetersHour": {
				"scale": 0.002724,
				"symbol": "",
				"name": "Kilogram-Force Meters/Hour"
			},
			"kilogramForceMetersMinute": {
				"scale": 0.163444,
				"symbol": "",
				"name": "Kilogram-Force Meters/Minute"
			}
		},
		"force": {
			"newtons": {
				"scale": 1,
				"symbol": "",
				"name": "Newtons"
			},
			"kilonewtons": {
				"scale": 1000,
				"symbol": "",
				"name": "Kilonewtons"
			},
			"meganewtons": {
				"scale": 1000000,
				"symbol": "",
				"name": "Meganewtons"
			},
			"dynes": {
				"scale": 0.00001,
				"symbol": "",
				"name": "Dynes"
			},
			"kilogramsForce": {
				"scale": 9.80665,
				"symbol": "",
				"name": "Kilograms Force"
			},
			"kips": {
				"scale": 4448.222,
				"symbol": "",
				"name": "Kips"
			},
			"poundsForce": {
				"scale": 4.4482216152605,
				"symbol": "",
				"name": "Pounds Force"
			},
			"poundals": {
				"scale": 0.138255,
				"symbol": "",
				"name": "Poundals"
			},
			"sthenes=kn": {
				"scale": 1000,
				"symbol": "",
				"name": "Sthenes (=kN)"
			},
			"tonnesForce": {
				"scale": 9806.65,
				"symbol": "",
				"name": "Tonnes Force"
			},
			"tonsForceUk": {
				"scale": 9964.01641818352,
				"symbol": "",
				"name": "Tons Force (UK)"
			},
			"tonsForceUs": {
				"scale": 8896.443230521,
				"symbol": "",
				"name": "Tons Force (US)"
			}
		},
		"electric_current": {
			"abampere": {
				"scale": 10,
				"symbol": "",
				"name": "Abampere"
			},
			"ampere": {
				"scale": 1,
				"symbol": "",
				"name": "Ampere"
			},
			"biot": {
				"scale": 10,
				"symbol": "",
				"name": "Biot"
			},
			"centiampere": {
				"scale": 0.01,
				"symbol": "",
				"name": "Centiampere"
			},
			"coulombSecond": {
				"scale": 1,
				"symbol": "",
				"name": "Coulomb/Second"
			},
			"emuOfCurrent": {
				"scale": 10,
				"symbol": "",
				"name": "EMU Of Current"
			},
			"esuOfCurrent": {
				"scale": 3.335641e-10,
				"symbol": "",
				"name": "ESU Of Current"
			},
			"franklinSecond": {
				"scale": 3.335641e-10,
				"symbol": "",
				"name": "Franklin/Second"
			},
			"gaussianElectricCurrent": {
				"scale": 3.335641e-10,
				"symbol": "",
				"name": "Gaussian Electric Current"
			},
			"gigaampere": {
				"scale": 1000000000,
				"symbol": "",
				"name": "Gigaampere"
			},
			"gilbert": {
				"scale": 0.79577472,
				"symbol": "",
				"name": "Gilbert"
			},
			"kiloampere": {
				"scale": 1000,
				"symbol": "",
				"name": "Kiloampere"
			},
			"megaampere": {
				"scale": 1000000,
				"symbol": "",
				"name": "Megaampere"
			},
			"microampere": {
				"scale": 0.000001,
				"symbol": "",
				"name": "Microampere"
			},
			"milliampere": {
				"scale": 0.001,
				"symbol": "",
				"name": "Milliampere"
			},
			"milliamp": {
				"scale": 0.001,
				"symbol": "",
				"name": "Milliamp"
			},
			"manoampere": {
				"scale": 1e-9,
				"symbol": "",
				"name": "Manoampere"
			},
			"picoampere": {
				"scale": 1e-12,
				"symbol": "",
				"name": "Picoampere"
			},
			"siemensVolt": {
				"scale": 1,
				"symbol": "",
				"name": "Siemens Volt"
			},
			"statampere": {
				"scale": 3.335641e-10,
				"symbol": "",
				"name": "Statampere"
			},
			"teraampere": {
				"scale": 1000000000000,
				"symbol": "",
				"name": "Teraampere"
			},
			"voltOhm": {
				"scale": 1,
				"symbol": "",
				"name": "Volt/Ohm"
			},
			"wattVolt": {
				"scale": 1,
				"symbol": "",
				"name": "Watt/Volt"
			},
			"weberHenry": {
				"scale": 1,
				"symbol": "",
				"name": "Weber/Henry"
			}
		}
	};

	$scope.form = {
		current_conversion : $scope.conversion_types[1]
	};

	/**
	 * [roundIt Rounds to desired number of decimal places]
	 * can implement option to choose the number
	 * @param  {[integer]} num [the value to be rounded]
	 * @param  {[integer]} X   [value to be converted]
	 * @return {[integer]}     [the rounded value]
	 */
	$scope.roundIt = function (num, X) {
		X = (!X ? 6 : X);
		return Math.round(num * Math.pow(10, X)) / Math.pow(10, X);
	};

	/**
	 * [isNumber Check if conversion formula is a number]
	 * @param  {[string]}  n [conversion string from the "units.js" object]
	 * @return {Boolean}   [true if nubmer false if formula]
	 */
	$scope.isNumber = function (n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};

	/**
	 * [toDecimal converts the input to a decimal, can handle fractional form of format "1 2/3"
	 * @param  {[string]} fraction [the string input into the <input>]
	 * @return {[float]}          [the input in decimal form]
	 */
	$scope.toDecimal = function (fraction) {
		var result, wholeNum = 0,
			frac, deci = 0;
		if (fraction.search('/') >= 0) {
			if ((fraction.search(' ') >= 0)) {
				wholeNum = fraction.split(' ');
				frac = wholeNum[1];
				wholeNum = parseFloat(wholeNum[0]);
			} else {
				frac = fraction;
			}
			frac = frac.split('/');
			deci = parseFloat(frac[0]) / parseFloat(frac[1]);
			result = wholeNum + deci;
		} else {
			result = parseFloat(fraction);
		}
		return result;
	}

	$scope.ConvertCompute = function(aFromUnitIndex, value, aToUnitIndex) {

		var conversionType = $scope.form.current_conversion.id;

		var oneUnitFrom = $scope.conversions[conversionType][aFromUnitIndex.id];
		var oneUnitTo = $scope.conversions[conversionType][aToUnitIndex.id];

		//Convert "From" units to base unit of category ie. celcius to Kelvin
		if ($scope.isNumber(oneUnitFrom.scale)) {
			value = value * oneUnitFrom.scale;
		} else {
			value = oneUnitFrom.scale(value);
		}

		//Next Convert into "To" units from the base unit of category ie. kelvin to fahrenheit
		if ($scope.isNumber(oneUnitTo.scale)) {
			value = value / oneUnitTo.scale;
		} else {
			value = oneUnitTo.scaleFrom(value);
		}
		return value;
	}

	$scope.$watch('form.current_conversion.in', function(newValue, oldValue) {
	  // access new and old value here
	  console.log("Your former user.name was "+oldValue+", you're current user name is "+newValue+".");
	  if(newValue == undefined){
	  // 	$scope.form.current_conversion.input_type = {
	  // 		from: {
			// 		type: 'number',
			// 		min: '0',
			// 		max: '0',
			// 		step: undefined
			// 	},
			// to: {
			// 		type: 'number',
			// 		min: undefined,
			// 		max: undefined,
			// 		step: undefined
			// 	}
			// };
	  	//$scope.form.current_conversion.input_type.from.min = 0;
	  	$scope.form.current_conversion.in = 0;
	  	$scope.reCal('in');
	  }
	});

	$scope.reCal = function(in_out) {

		in_unit = $scope.form.current_conversion.from;
		out_unit = $scope.form.current_conversion.to;

		if(window.AdMob) {
			AdMob.showInterstitial();
		}

		if(in_out != 'out'){
			value = $scope.form.current_conversion.in;
			$scope.form.current_conversion.out = $scope.ConvertCompute(in_unit, value, out_unit);
		}
		else{
			value = $scope.form.current_conversion.out;
			$scope.form.current_conversion.in = $scope.ConvertCompute(out_unit, value, in_unit);
		}
    };

    $scope.exists = function(obj, key) {
	    console.log(obj);
	    if (typeof obj !== "undefined" && obj !== null)
	        return obj;
	    return 0; // Maybe you'd want undefined instead
	}
}])
 