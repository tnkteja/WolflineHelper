'use strict';

/**
 * @ngdoc popup.js script
 * @name Neela Krishna Teja Tadikonda
 * @description 
 * # 
 *
 * Main module of the application.
 */
angular.module('wolflinehelper',['ngResource']).controller('PopupCtrl',['$scope','$resource','$filter',function($scope,$resource,$filter){
	$scope.stops=[{"code": "240", "description": "", "url": "", "parent_station_id": null, "agency_ids": ["16", "192"], "station_id": null, "location": {"lat": 35.769472, "lng": -78.676743}, "stop_id": "4114106", "routes": ["4000100", "4003090", "4003110", "4005438", "4007012"], "location_type": "stop", "name": "Hunt Library at Partners Way"},{"code": "134", "description": "", "url": "", "parent_station_id": null, "agency_ids": ["16", "192"], "station_id": null, "location": {"lat": 35.771963, "lng": -78.675303}, "stop_id": "4114530", "routes": ["4000100", "4003090", "4003110", "4005438", "4007012"], "location_type": "stop", "name": "Partners Way at Varsity Dr (COE)"},{"code": "204", "description": "", "url": "", "parent_station_id": null, "agency_ids": ["16", "192"], "station_id": null, "location": {"lat": 35.769794, "lng": -78.677967}, "stop_id": "4114534", "routes": ["4000100", "4003090", "4003110", "4005438", "4007012"], "location_type": "stop", "name": "College of Textiles"}];
	$scope.routes=[{"description": "", "short_name": "6", "long_name": "Carter Finley", "url": "", "segments": [["4001298", "forward"], ["4001299", "backward"], ["4001336", "forward"], ["4001338", "forward"], ["4001604", "forward"], ["4001622", "forward"], ["4022731", "backward"], ["4022731", "forward"], ["4022735", "backward"], ["4073895", "backward"], ["4073895", "forward"], ["4073899", "backward"], ["4073899", "forward"], ["4090051", "forward"], ["4090055", "forward"], ["4090243", "backward"], ["4090259", "backward"], ["4090483", "backward"], ["4093571", "forward"], ["4113725", "forward"], ["4113727", "backward"], ["4119739", "forward"], ["4123625", "backward"], ["4123643", "backward"], ["4123643", "forward"], ["4125103", "backward"], ["4125103", "forward"], ["4125105", "backward"], ["4125105", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4000098", "stops": ["4100154", "4100182", "4099222", "4099334", "4102278", "4103230", "4189882", "4099306", "4101066", "4102234", "4102242", "4177588", "4185898", "4185900", "4185712", "4185902"], "is_hidden": false, "type": "bus", "color": "00a6e0"}, {"description": "", "short_name": "8", "long_name": "Southeast Loop", "url": "", "segments": [["4090151", "forward"], ["4090159", "forward"], ["4090191", "backward"], ["4090223", "backward"], ["4090235", "forward"], ["4090239", "backward"], ["4090279", "backward"], ["4090303", "backward"], ["4090303", "forward"], ["4090431", "forward"], ["4090483", "backward"], ["4093343", "forward"], ["4095023", "backward"], ["4095079", "backward"], ["4095079", "forward"], ["4095087", "backward"], ["4095087", "forward"], ["4095139", "forward"], ["4103231", "backward"], ["4103235", "forward"], ["4113711", "backward"], ["4113713", "forward"], ["4113715", "forward"], ["4113735", "backward"], ["4113737", "backward"], ["4113783", "backward"], ["4113783", "forward"], ["4113785", "backward"], ["4113785", "forward"], ["4113961", "forward"], ["4113963", "forward"], ["4114483", "backward"], ["4114541", "backward"], ["4114545", "backward"], ["4114573", "backward"], ["4114575", "forward"], ["4119739", "forward"], ["4119975", "forward"], ["4123663", "backward"], ["4123663", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4000100", "stops": ["4114534", "4114106", "4114530", "4100158", "4099822", "4099706", "4100178", "4099298", "4099306", "4101186", "4099758", "4105078", "4102038", "4105082", "4102042", "4118886", "4100186", "4099542", "4116594"], "is_hidden": false, "type": "bus", "color": "a4a8d4"}, {"description": "", "short_name": "3", "long_name": "Engineering", "url": "", "segments": [["4001278", "forward"], ["4090235", "forward"], ["4090239", "backward"], ["4090279", "backward"], ["4090279", "forward"], ["4090303", "backward"], ["4093339", "backward"], ["4093343", "forward"], ["4095023", "backward"], ["4095023", "forward"], ["4095079", "backward"], ["4095079", "forward"], ["4095087", "backward"], ["4095087", "forward"], ["4113711", "backward"], ["4113713", "forward"], ["4113735", "backward"], ["4113737", "backward"], ["4113783", "backward"], ["4113783", "forward"], ["4113785", "forward"], ["4114111", "forward"], ["4114573", "backward"], ["4114573", "forward"], ["4114575", "backward"], ["4114575", "forward"], ["4119975", "forward"], ["4121987", "forward"], ["4122003", "backward"], ["4123663", "backward"], ["4123663", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4003090", "stops": ["4114534", "4114106", "4114530", "4100138", "4102186", "4105078", "4102038"], "is_hidden": false, "type": "bus", "color": "00723f"}, {"description": "", "short_name": "9", "long_name": "Gorman St.", "url": "", "segments": [["4001360", "backward"], ["4001360", "forward"], ["4023819", "backward"], ["4023819", "forward"], ["4043803", "backward"], ["4043803", "forward"], ["4043807", "backward"], ["4043807", "forward"], ["4043939", "backward"], ["4079431", "backward"], ["4079431", "forward"], ["4079435", "backward"], ["4079435", "forward"], ["4090151", "forward"], ["4090159", "forward"], ["4090191", "backward"], ["4090279", "backward"], ["4090431", "forward"], ["4092775", "backward"], ["4092775", "forward"], ["4093343", "forward"], ["4095023", "backward"], ["4095139", "forward"], ["4100363", "backward"], ["4100363", "forward"], ["4103231", "backward"], ["4103235", "forward"], ["4113759", "forward"], ["4113761", "backward"], ["4113763", "backward"], ["4113763", "forward"], ["4113829", "backward"], ["4113829", "forward"], ["4113961", "forward"], ["4114159", "backward"], ["4114159", "forward"], ["4114483", "backward"], ["4114541", "backward"], ["4114545", "backward"], ["4114573", "backward"], ["4114575", "forward"], ["4119737", "backward"], ["4119739", "forward"], ["4122457", "backward"], ["4122457", "forward"], ["4123673", "backward"], ["4123673", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4003098", "stops": ["4128442", "4099922", "4104458", "4099930", "4099958", "4099982", "4099986", "4100018", "4100050", "4100162", "4099706", "4100178", "4099298", "4099310", "4099314", "4101186", "4099758", "4105078", "4102038", "4105082", "4100026", "4100014", "4100058", "4128418", "4128422", "4128426", "4128430", "4128434", "4128438"], "is_hidden": false, "type": "bus", "color": "e7b908"}, {"description": "", "short_name": "5", "long_name": "Varsity", "url": "", "segments": [["4001362", "backward"], ["4043939", "backward"], ["4090079", "forward"], ["4090083", "forward"], ["4090119", "backward"], ["4090151", "forward"], ["4090155", "forward"], ["4090191", "backward"], ["4090219", "backward"], ["4090279", "backward"], ["4090403", "backward"], ["4090447", "forward"], ["4090451", "forward"], ["4090467", "forward"], ["4093343", "forward"], ["4094279", "forward"], ["4095023", "backward"], ["4095139", "forward"], ["4103231", "backward"], ["4103235", "forward"], ["4113419", "forward"], ["4113961", "forward"], ["4114091", "backward"], ["4114483", "backward"], ["4114541", "backward"], ["4114545", "backward"], ["4114573", "backward"], ["4114575", "forward"], ["4119737", "backward"], ["4119739", "forward"], ["4119843", "forward"], ["4119845", "forward"], ["4119915", "forward"], ["4123641", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4003102", "stops": ["4100066", "4100082", "4102270", "4099558", "4099358", "4100178", "4099298", "4099310", "4099314", "4101186", "4099758", "4105078", "4102038", "4105082", "4100078"], "is_hidden": false, "type": "bus", "color": "78b6e4"}, {"description": "", "short_name": "11", "long_name": "Village Link", "url": "", "segments": [["4001360", "forward"], ["4001362", "backward"], ["4001373", "forward"], ["4079431", "backward"], ["4079431", "forward"], ["4079435", "backward"], ["4079435", "forward"], ["4090119", "backward"], ["4090407", "forward"], ["4090447", "forward"], ["4090451", "forward"], ["4090467", "forward"], ["4093171", "forward"], ["4113711", "backward"], ["4113713", "forward"], ["4113715", "forward"], ["4113735", "backward"], ["4113737", "backward"], ["4113759", "forward"], ["4113761", "backward"], ["4113763", "backward"], ["4113763", "forward"], ["4113829", "backward"], ["4113829", "forward"], ["4114091", "backward"], ["4114109", "forward"], ["4114111", "forward"], ["4114127", "forward"], ["4114165", "backward"], ["4114165", "forward"], ["4114185", "backward"], ["4119767", "backward"], ["4123613", "forward"], ["4123615", "forward"], ["4123631", "forward"], ["4123673", "backward"], ["4123673", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4003110", "stops": ["4100166", "4099438", "4099422", "4100026", "4100014", "4100058", "4099906", "4100142", "4116594", "4114534", "4114106", "4114530", "4100186", "4099542", "4100098", "4100002", "4100018", "4100050", "4100162", "4099558"], "is_hidden": false, "type": "bus", "color": "44559c"}, {"description": "", "short_name": "16", "long_name": "Werewolf Shuttle", "url": "", "segments": [["4043939", "backward"], ["4090151", "backward"], ["4090151", "forward"], ["4090155", "forward"], ["4090159", "backward"], ["4090183", "forward"], ["4090191", "backward"], ["4090279", "backward"], ["4090399", "forward"], ["4090443", "forward"], ["4090447", "forward"], ["4090451", "forward"], ["4090843", "backward"], ["4093343", "forward"], ["4094311", "backward"], ["4103231", "backward"], ["4103235", "forward"], ["4106863", "backward"], ["4106867", "backward"], ["4113961", "forward"], ["4114483", "backward"], ["4114541", "backward"], ["4114545", "backward"], ["4119737", "backward"], ["4119739", "forward"], ["4119767", "backward"], ["4123613", "forward"], ["4123631", "forward"]], "is_active": true, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4003706", "stops": ["4100166", "4099438", "4099422", "4099386", "4099366", "4099362", "4100086", "4099358", "4100178", "4099298", "4099310", "4099314", "4101186", "4099758", "4105078", "4128414", "4128410", "4128450", "4128466", "4099522", "4099602", "4099558"], "is_hidden": false, "type": "bus", "color": "d7181e"}, {"description": "", "short_name": "HOLIDAY", "long_name": "Sunday Shuttle", "url": "", "segments": [["4001362", "backward"], ["4090119", "backward"], ["4090151", "forward"], ["4090155", "forward"], ["4090235", "forward"], ["4090403", "backward"], ["4090447", "forward"], ["4090451", "forward"], ["4095079", "forward"], ["4095087", "forward"], ["4095139", "forward"], ["4106867", "forward"], ["4113783", "forward"], ["4113785", "forward"], ["4119975", "forward"], ["4123663", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4004514", "stops": ["4100158", "4100138", "4099558", "4099358", "4128410", "4128414"], "is_hidden": false, "type": "bus", "color": "d6182a"}, {"description": "", "short_name": "7", "long_name": "Wolflink Shuttle", "url": "", "segments": [["4090151", "forward"], ["4090155", "forward"], ["4090183", "forward"], ["4090195", "backward"], ["4090279", "backward"], ["4090399", "forward"], ["4090435", "forward"], ["4090443", "forward"], ["4090447", "forward"], ["4090451", "forward"], ["4090843", "backward"], ["4093343", "forward"], ["4094311", "backward"], ["4103231", "backward"], ["4103235", "forward"], ["4114483", "backward"], ["4114573", "backward"], ["4114575", "forward"], ["4119767", "backward"], ["4123613", "forward"], ["4123631", "forward"], ["4123669", "backward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4004686", "stops": ["4100166", "4099438", "4099422", "4099386", "4099366", "4099362", "4104574", "4100086", "4099358", "4100178", "4099730", "4099734", "4099322", "4099318", "4099758", "4105078", "4102038", "4105082", "4099722", "4099522", "4099602", "4099558"], "is_hidden": false, "type": "bus", "color": "d7181e"}, {"description": "", "short_name": "10", "long_name": "Centennial", "url": "", "segments": [["4043803", "forward"], ["4043807", "backward"], ["4050183", "backward"], ["4079431", "backward"], ["4079431", "forward"], ["4079435", "forward"], ["4113521", "forward"], ["4113711", "backward"], ["4113713", "forward"], ["4113715", "forward"], ["4113735", "backward"], ["4113737", "backward"], ["4114111", "forward"], ["4114127", "forward"], ["4114159", "backward"], ["4114165", "forward"], ["4114185", "backward"], ["4119841", "forward"], ["4119843", "forward"], ["4123621", "forward"], ["4123671", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4005438", "stops": ["4114534", "4114106", "4114530", "4100186", "4099542", "4100098", "4100002", "4100066", "4100058", "4128418", "4128422", "4128426", "4128430", "4128434", "4128438", "4102118", "4102162", "4102166", "4102174", "4100142", "4116594"], "is_hidden": false, "type": "bus", "color": "ff00c5"}, {"description": "", "short_name": "1", "long_name": "Avent Ferry", "url": "", "segments": [["4001278", "backward"], ["4001278", "forward"], ["4023819", "backward"], ["4023819", "forward"], ["4043939", "backward"], ["4050183", "backward"], ["4050183", "forward"], ["4090151", "forward"], ["4090159", "forward"], ["4090191", "backward"], ["4090279", "backward"], ["4090431", "forward"], ["4092775", "backward"], ["4092775", "forward"], ["4093343", "forward"], ["4095023", "backward"], ["4095079", "backward"], ["4095079", "forward"], ["4095087", "backward"], ["4095087", "forward"], ["4095139", "forward"], ["4100363", "backward"], ["4100363", "forward"], ["4103231", "backward"], ["4103235", "forward"], ["4113783", "backward"], ["4113783", "forward"], ["4113961", "forward"], ["4114483", "backward"], ["4114541", "backward"], ["4114545", "backward"], ["4114573", "backward"], ["4114575", "forward"], ["4119737", "backward"], ["4119739", "forward"], ["4122003", "backward"], ["4122003", "forward"], ["4122457", "backward"], ["4122457", "forward"], ["4123663", "backward"], ["4123663", "forward"], ["4123671", "backward"], ["4123671", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4007008", "stops": ["4102042", "4101378", "4102046", "4102050", "4105854", "4102054", "4102058", "4105050", "4099918", "4128442", "4102118", "4102162", "4102166", "4102174", "4099822", "4099706", "4100178", "4099298", "4099310", "4099314", "4101186", "4099758", "4105078", "4102038", "4105082"], "is_hidden": false, "type": "bus", "color": "9e1981"}, {"description": "", "short_name": "2", "long_name": "Hillsborough St Shuttle", "url": "", "segments": [["4043923", "backward"], ["4043939", "backward"], ["4090151", "backward"], ["4090151", "forward"], ["4090155", "forward"], ["4090159", "backward"], ["4090183", "forward"], ["4090191", "backward"], ["4090191", "forward"], ["4090243", "backward"], ["4090259", "backward"], ["4090403", "backward"], ["4090443", "forward"], ["4090447", "forward"], ["4090451", "forward"], ["4090843", "backward"], ["4094311", "backward"], ["4103231", "backward"], ["4103231", "forward"], ["4103235", "backward"], ["4103235", "forward"], ["4113499", "backward"], ["4113505", "backward"], ["4113507", "backward"], ["4113509", "forward"], ["4113511", "forward"], ["4113603", "backward"], ["4113961", "forward"], ["4114283", "forward"], ["4114285", "forward"], ["4114439", "forward"], ["4114441", "forward"], ["4119737", "backward"], ["4119739", "forward"], ["4119767", "backward"], ["4119767", "forward"], ["4123613", "forward"], ["4123623", "backward"], ["4123625", "backward"], ["4123631", "backward"], ["4123631", "forward"], ["4123645", "backward"], ["4123645", "forward"], ["4123647", "forward"], ["4123669", "forward"], ["4124301", "backward"], ["4124301", "forward"]], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4007010", "stops": ["4100166", "4099438", "4099422", "4189052", "4177592", "4177594", "4178066", "4174296", "4099234", "4099226", "4149514", "4099386", "4099366", "4099362", "4174298", "4099358", "4100178", "4099298", "4099310", "4099314", "4101186", "4102230", "4101058", "4101062", "4101066", "4128446", "4128450", "4128466", "4099522", "4099602", "4099558"], "is_hidden": false, "type": "bus", "color": "a1bf2e"}, {"description": "", "short_name": "14", "long_name": "Centennial Night", "url": "", "segments": [["4001360", "forward"], ["4043939", "backward"], ["4079431", "backward"], ["4079435", "forward"], ["4090039", "backward"], ["4090151", "forward"], ["4090159", "forward"], ["4090191", "backward"], ["4090223", "backward"], ["4090235", "forward"], ["4090239", "backward"], ["4090279", "backward"], ["4090303", "backward"], ["4090303", "forward"], ["4090407", "forward"], ["4090431", "forward"], ["4093343", "forward"], ["4095023", "backward"], ["4095079", "backward"], ["4095087", "backward"], ["4101211", "forward"], ["4103231", "backward"], ["4103235", "forward"], ["4113419", "backward"], ["4113521", "forward"], ["4113711", "backward"], ["4113713", "forward"], ["4113715", "forward"], ["4113735", "backward"], ["4113737", "backward"], ["4113739", "backward"], ["4113739", "forward"], ["4113783", "backward"], ["4113785", "backward"], ["4113785", "forward"], ["4113961", "forward"], ["4114165", "forward"], ["4114185", "backward"], ["4114483", "backward"], ["4114541", "backward"], ["4114545", "backward"], ["4114573", "backward"], ["4114575", "forward"], ["4119737", "backward"], ["4119739", "forward"], ["4119975", "forward"], ["4122003", "backward"], ["4123663", "backward"]], "is_active": true, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4007012", "stops": ["4099310", "4099314", "4101186", "4099758", "4105078", "4102038", "4105082", "4102042", "4118886", "4100186", "4099542", "4114534", "4177590", "4114106", "4114530", "4100138", "4102046", "4100098", "4100002", "4099706", "4100178", "4099298"], "is_hidden": false, "type": "bus", "color": "81423d"}, {"description": "", "short_name": "12", "long_name": "Night Wolf", "url": "", "segments": [["4001278", "forward"], ["4001360", "forward"], ["4043803", "backward"], ["4043807", "forward"], ["4043939", "backward"], ["4050183", "forward"], ["4079431", "backward"], ["4079435", "forward"], ["4090151", "forward"], ["4090159", "forward"], ["4090191", "backward"], ["4090279", "backward"], ["4090431", "forward"], ["4093343", "forward"], ["4095023", "backward"], ["4095079", "backward"], ["4095087", "backward"], ["4103231", "backward"], ["4103235", "forward"], ["4113761", "backward"], ["4113763", "forward"], ["4113783", "backward"], ["4113829", "backward"], ["4113961", "forward"], ["4114159", "forward"], ["4114483", "backward"], ["4114541", "backward"], ["4114545", "backward"], ["4114573", "backward"], ["4114575", "forward"], ["4119737", "backward"], ["4119739", "forward"], ["4122003", "backward"], ["4123663", "backward"], ["4123671", "backward"], ["4123673", "forward"]], "is_active": true, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4007014", "stops": ["4099310", "4099314", "4101186", "4099758", "4105078", "4102038", "4105082", "4102042", "4101378", "4102046", "4102050", "4105854", "4102054", "4102058", "4105050", "4099918", "4099922", "4104458", "4099930", "4099958", "4099982", "4099986", "4100018", "4100050", "4100162", "4099706", "4100178", "4099298"], "is_hidden": false, "type": "bus", "color": "e7b908"}, {"description": "", "short_name": "13", "long_name": "Wolfprowl", "url": "", "segments": [["4001360", "backward"], ["4043939", "backward"], ["4090039", "backward"], ["4090083", "forward"], ["4090119", "backward"], ["4090151", "forward"], ["4090155", "forward"], ["4090191", "backward"], ["4090279", "backward"], ["4090399", "forward"], ["4090447", "forward"], ["4090451", "forward"], ["4093343", "forward"], ["4093675", "forward"], ["4095023", "backward"], ["4095139", "forward"], ["4103231", "backward"], ["4103235", "forward"], ["4113419", "backward"], ["4113499", "backward"], ["4113501", "forward"], ["4113503", "forward"], ["4113505", "backward"], ["4113511", "forward"], ["4113513", "forward"], ["4113521", "forward"], ["4113659", "backward"], ["4113759", "forward"], ["4113763", "backward"], ["4113805", "backward"], ["4113807", "forward"], ["4113817", "backward"], ["4113829", "forward"], ["4113883", "backward"], ["4113961", "forward"], ["4113967", "forward"], ["4113969", "forward"], ["4114261", "backward"], ["4114315", "backward"], ["4114483", "backward"], ["4114523", "backward"], ["4114541", "backward"], ["4114547", "forward"], ["4114573", "backward"], ["4114575", "forward"], ["4119737", "backward"], ["4119739", "forward"], ["4119767", "backward"], ["4120409", "backward"], ["4120459", "backward"], ["4123631", "forward"], ["4123669", "backward"], ["4123673", "backward"], ["4124345", "backward"], ["4124345", "forward"], ["4124391", "backward"], ["4124399", "forward"]], "is_active": true, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4007016", "stops": ["4100166", "4104574", "4100086", "4099358", "4100178", "4099298", "4099310", "4099314", "4101186", "4128470", "4105818", "4105290", "4101026", "4101046", "4099758", "4105078", "4102038", "4105082", "4100026", "4100014", "4099558"], "is_hidden": false, "type": "bus", "color": "44559c"}, {"description": "", "short_name": "Game Day", "long_name": "DH Hill", "url": "", "segments": [], "is_active": false, "agency_id": 16, "text_color": "111111", "route_id": "4007388", "stops": ["4099310", "4102038", "4185380"], "is_hidden": false, "type": "bus", "color": "00db50"}, {"description": "", "short_name": "Game Day", "long_name": "Carmichael / DH Hill", "url": "", "segments": [], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4007390", "stops": ["4099310", "4102038", "4185380"], "is_hidden": false, "type": "bus", "color": "b51079"}, {"description": "", "short_name": "Game Day", "long_name": "Witherspoon", "url": "", "segments": [], "is_active": false, "agency_id": 16, "text_color": "111111", "route_id": "4007392", "stops": ["4100178", "4185380", "4099310"], "is_hidden": false, "type": "bus", "color": "b59f10"}, {"description": "", "short_name": "Game Day", "long_name": "Witherspoon - Greek", "url": "", "segments": [], "is_active": false, "agency_id": 16, "text_color": "FFF8F5", "route_id": "4007394", "stops": ["4100178", "4100026", "4100014", "4185380", "4099310"], "is_hidden": false, "type": "bus", "color": "ba440b"}, {"description": "", "short_name": "Game Day", "long_name": "Greek Terror", "url": "", "segments": [], "is_active": false, "agency_id": 16, "text_color": "FFFFFF", "route_id": "4007396", "stops": ["4100026", "4100014", "4185380", "4099310", "4100178"], "is_hidden": false, "type": "bus", "color": "8c4a1d"}];
	$scope.routesdic={};
	for (var i = 0; i < $scope.routes.length; i++) {
		$scope.routesdic[$scope.routes[i].route_id]= $scope.routes[i].short_name+" "+$scope.routes[i].long_name;
	};
	$scope.waitingfor=null;
	$scope.arrivals={};
	$scope.status="     "

	$scope.update = function(){
		console.log($scope.waitingfor);
		GetBusses.query({query:'arrival-estimates.json',agencies:16,stops:$scope.waitingfor},function(estimates){

		$scope.arrivals={}
		for (var i = 0; i < estimates.data[0].arrivals.length; i++) {
			if($scope.arrivals.hasOwnProperty(estimates.data[0].arrivals[i].route_id) ){
				$scope.arrivals[estimates.data[0].arrivals[i].route_id]+=", "+$filter('date')(estimates.data[0].arrivals[i].arrival_at,'h:mma');
			}else{
				$scope.arrivals[estimates.data[0].arrivals[i].route_id]=$filter('date')(estimates.data[0].arrivals[i].arrival_at,'h:mma');
			}
		};
		});
	}

	$scope.buttondisabled = true;
	$scope.updatedRouteID = function(){
		$scope.buttondisabled  = false;
	};

	var GetBusses = $resource('https://transloc-api-1-2.p.mashape.com/:query',{query:'@id'},{
		query: {
			method: "GET",
			headers: {
				    "X-Mashape-Key": "zMwphoFN3rmshlR7hWupTpkHWaSBp1SYUwHjsnjXlN6SKGCi2q",
    				"Accept": "application/json"
			}
		}
	});
	
	$scope.waittimes=[5,10,15,30,45,60];

	$scope.remindin = function(time) {
		/**
		 * If the bus is within this time. Instantly make a notofication.
		 * Else wait for appropriate amount of time and then make the notification.
		 */
 		chrome.runtime.sendMessage({"time":time,"waitingfor":$scope.routesdic[parseInt($scope.route_id)]});
 		$scope.status = "Will do !"
 		setTimeout(function(){
			window.close();
 		},500)
	};
}]);

