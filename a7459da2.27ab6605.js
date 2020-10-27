(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),l=(a(0),a(97)),b={id:"pipeline_logstash",title:"Pipeline Logstash",sidebar_label:"Logstash"},c={unversionedId:"pipeline_logstash",id:"version-1.2.5/pipeline_logstash",isDocsHomePage:!1,title:"Pipeline Logstash",description:"Logstash",source:"@site/versioned_docs/version-1.2.5/pipeline_logstash.md",slug:"/pipeline_logstash",permalink:"/netsage-pipeline/docs/1.2.5/pipeline_logstash",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.5/pipeline_logstash.md",version:"1.2.5",sidebar_label:"Logstash",sidebar:"version-1.2.5/Pipeline",previous:{title:"Importer",permalink:"/netsage-pipeline/docs/1.2.5/pipeline_importer"},next:{title:"Docker Guide",permalink:"/netsage-pipeline/docs/1.2.5/devel/docker"}},i=[{value:"Logstash Procedures",id:"logstash-procedures",children:[{value:"01-inputs.conf",id:"01-inputsconf",children:[]},{value:"10-preliminaries.conf",id:"10-preliminariesconf",children:[]},{value:"20-add_id.conf",id:"20-add_idconf",children:[]},{value:"40-aggregation.conf",id:"40-aggregationconf",children:[]},{value:"50-geoip-tagging.conf",id:"50-geoip-taggingconf",children:[]},{value:"55-member-orgs.conf",id:"55-member-orgsconf",children:[]},{value:"60-scireg-tagging-fakegeoip.conf",id:"60-scireg-tagging-fakegeoipconf",children:[]},{value:"65-preferred-location-org.conf",id:"65-preferred-location-orgconf",children:[]},{value:"70-deidentify.conf",id:"70-deidentifyconf",children:[]},{value:"80-privatize.org.conf",id:"80-privatizeorgconf",children:[]},{value:"90-additional-fields.conf",id:"90-additional-fieldsconf",children:[]},{value:"95-cleanup.conf",id:"95-cleanupconf",children:[]},{value:"99-outputs.conf -",id:"99-outputsconf--",children:[]},{value:"Final Stage",id:"final-stage",children:[]}]},{value:"Elasticsearch Fields",id:"elasticsearch-fields",children:[{value:"ES fields",id:"es-fields",children:[]},{value:"Developer fields",id:"developer-fields",children:[]},{value:"Flow fields",id:"flow-fields",children:[]},{value:"Source Fields (Destination Fields similarly)",id:"source-fields-destination-fields-similarly",children:[]},{value:"Source Science Registry Fields  (Destination Fields similarly)",id:"source-science-registry-fields--destination-fields-similarly",children:[]},{value:"&quot;Preferred&quot; fields",id:"preferred-fields",children:[]},{value:"Values",id:"values",children:[]},{value:"Tstat Values",id:"tstat-values",children:[]}]}],o={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"logstash"},"Logstash"),Object(l.b)("p",null,"These Logstash config files are in /etc/logstash/conf.d/"),Object(l.b)("h2",{id:"logstash-procedures"},"Logstash Procedures"),Object(l.b)("p",null,"The following steps are defined for logstash:"),Object(l.b)("h3",{id:"01-inputsconf"},"01-inputs.conf"),Object(l.b)("p",null,"reads flows from wherever the user wants to get data; in our case, from the netsage_deidentifer_raw rabbit queue."),Object(l.b)("h3",{id:"10-preliminariesconf"},"10-preliminaries.conf"),Object(l.b)("p",null,"drops flows to or from private IP addresses;\nadds @injest_time;\nconverts any timestamps in milliseconds to seconds;\ndrops events with timestamps more than a year in the past or (10 sec) in the future;\ndoes some data type conversions"),Object(l.b)("h3",{id:"20-add_idconf"},"20-add_id.conf"),Object(l.b)("p",null,"adds a unique id based on the 5-tuple (src and dst ips and ports, and protocol) plus the sensor name. This ends up being called meta.id.\n(30-xxx.conf is not used yet)"),Object(l.b)("h3",{id:"40-aggregationconf"},"40-aggregation.conf"),Object(l.b)("p",null,"stitches together flows from different nfcapd files into longer flows, matching them up by meta.id and using a specified inactivity_timeout to decide when to start a new flow."),Object(l.b)("p",null,"Notes: By default, 5-minute nfcapd files are assumed, and if less than 10.5 min have passed between the start of the current flow and the start of the last matching one, stitch the two together."),Object(l.b)("p",null,"Your logstash pipeline can have only 1 worker or aggregation is not going to work! "),Object(l.b)("h3",{id:"50-geoip-taggingconf"},"50-geoip-tagging.conf"),Object(l.b)("p",null,'if the destination IP is in the multicast range, sets the destination Organization, Country, and Continent to "Multicast";\nqueries the MaxMind GeoLite2-ASN database by IP to get src and dst Organizations (note that these are the organizations associated with the ASN);\nif the ASN in the flow header differs from that which MaxMind gives, the flow header\'s value is saved ',"[we need to not do this if it's a private ASN]",";\nqueries the MaxMind GeoLite2-City database by IP to get src and dst Countries, Continents, Latitudes, and Longitudes. "),Object(l.b)("h3",{id:"55-member-orgsconf"},"55-member-orgs.conf"),Object(l.b)("p",null,"[this part is commented out right now: if a src or dst ASN matches a certain value, search only the corresponding lookup table.]","\nSearch lookup tables by IP to obtain member or customer organization names and overwrite the GeoIP ASN Organization where applicable.\nThis allows us to have entities which don't own their own ASs be listed as the src or dst Organization."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Notes"),": Lookup tables are not stored in github."),Object(l.b)("h3",{id:"60-scireg-tagging-fakegeoipconf"},"60-scireg-tagging-fakegeoip.conf"),Object(l.b)("p",null,"uses a fake geoip database containing Science Registry information to add, for src and dst, science discipline and role, science registry organization and location, etc;\nremoves scireg fields we don't actually need to save to elasticsearch."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Notes"),": The science registry fake geoip database can be downloaded from scienceregistry.grnoc.iu.edu via a cron job. "),Object(l.b)("h3",{id:"65-preferred-location-orgconf"},"65-preferred-location-org.conf"),Object(l.b)("p",null,"copies science registry organization and/or location values, if they exist, to the preferred_organization and/or perferred_location fields."),Object(l.b)("h3",{id:"70-deidentifyconf"},"70-deidentify.conf"),Object(l.b)("p",null,"replaces the last octet of IPv4 addresses and the last 4 hextets of IPv6 addresses with x's in order to deidentify them. "),Object(l.b)("h3",{id:"80-privatizeorgconf"},"80-privatize.org.conf"),Object(l.b)("p",null,'removes information about Australian organizations (or, with modification, any organization that has privacy rules that require us not to identify them).\nIf the ASN is one listed, completely replaces the IP with x\'s, sets the location to central Autralia, sets all organizations to "AARNet", removes all Projects.'),Object(l.b)("h3",{id:"90-additional-fieldsconf"},"90-additional-fields.conf"),Object(l.b)("p",null,"sets additional quick and easy fields. The first 2 use lookup files based on regexes.  Currently we have:\nsensor_group  = TACC, AMPATH, etc\nsensor_type    = Circuit, Archive, Exchange Point, or Regional Network\ncountry_scope = Domestic, International, or Mixed"),Object(l.b)("h3",{id:"95-cleanupconf"},"95-cleanup.conf"),Object(l.b)("p",null,"does small misc. tasks at the end like rename, remove, or convert fields"),Object(l.b)("h3",{id:"99-outputsconf--"},"99-outputs.conf -"),Object(l.b)("p",null,"adds @exit_time and @processing_time,\nsends results to whereever the user wants them to go. In our case, it sends them to the netsage_archive_input queue (or netsage_ilight_input, etc) on netsage-elk1.grnoc.iu.edu. "),Object(l.b)("h3",{id:"final-stage"},"Final Stage"),Object(l.b)("p",null,"In our case, OmniSOC manages the last stage. Their logstash reads flows from the netsage_archive_input queue and sends it into elasticsearch. The indices are named like om-ns-netsage-YYYY.mm.dd-",Object(l.b)("em",{parentName:"p"}," (or om-ns-ilight-"),", etc).  "),Object(l.b)("p",null,"This can be easily replicated with the following configuration though you'll need one for each feed/index."),Object(l.b)("p",null,"Naturally the hosts for rabbit and elastic will need to be updated accordingly."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'input {\n  rabbitmq {\n    host => \'localhost\'\n    user => \'guest\'\n    password => "${rabbitmq_pass}"\n    exchange => \'netsage.direct\'\n    key =>   XXXXXXX\'\n    queue => \'netsage\'\n    durable => true\n    subscription_retry_interval_seconds => 5\n    connection_timeout => 10000\n  }\n}\nfilter {\n  if [@metadata][rabbitmq_properties][timestamp] {\n    date {\n      match => ["[@metadata][rabbitmq_properties][timestamp]", "UNIX"]\n    }\n  }\n}\n\noutput {\n    elasticsearch {\n      hosts => [\n          "https://CHANGEME1",\n          "https://CHANGEME2"\n      ]\n      user => "logstash"\n      password => "${logstash_elasticsearch_password}"\n      cacert => "/etc/logstash/ca.crt"\n      index => "om-ns-netsage"\n      template_overwrite => true\n      failure_type_logging_whitelist => []\n      action => index\n      #ssl_certificate_verification => false\n    }\n}\n')),Object(l.b)("p",null,"Once the data is published in elastic, you can use the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/netsage-project/netsage-grafana-configs"}),"grafana dashboard")," to visualize the data."),Object(l.b)("h2",{id:"elasticsearch-fields"},"Elasticsearch Fields"),Object(l.b)("h3",{id:"es-fields"},"ES fields"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_index"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"om-ns-netsage-2020.06."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"equivalent to an sql table")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_doc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set by ES")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HRkcm3IByJ9fEnbnCpaY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"document id, set by ES")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"_score"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set by ES query")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@version"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set by ES")))),Object(l.b)("h3",{id:"developer-fields"},"Developer fields"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flow"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Always "flow" for us. Other types may be "macy", etc.')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@injest_time"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2020-06-09T21:51:57.059Z"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Essentially time the flow went into the logstash pipeline (10-preliminaries.conf for tstat flows) or the time stitching of the flow commenced (40-aggregation.conf for others)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@timestamp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jun 9, 2020 @ 18:03:21.703"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The time the flow went into the logstash pipeline for tstat flows, or the time stitching finished and the event was pushed for other flows.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@exit_time"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jun 9, 2020 @ 18:03:25.369"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The time the flow exited the pipeline (99-outputs.conf)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@processing_time"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"688.31"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"@exit_time minus @injest_time. Useful for seeing how long stitching took.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stitched_flows"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of flows stitched together to make this final one. 0 for tstat flows, which are always complete. 1 if no flows were stitched together.")))),Object(l.b)("h3",{id:"flow-fields"},"Flow fields"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"start"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jun 9, 2020 @ 17:39:53.808"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start time of the flow (first packet seen)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"end"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jun 9, 2020 @ 17:39:57.699"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"End time of the flow   (last packet seen)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.protocol"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tcp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Protocol used")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a17c4f05420d7ded9eb151ccd293a633 ff226d1752b24e0f4139a87a8b26d779"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assigned flow id")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.flow_type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sflow"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sflow, Netflow, or Tstat")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.sensor_id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"snvl2-pw-sw-1-mgmt-2.cenic.net"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sensor name (set in importer config, may not always be a hostname)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.sensor_group"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CENIC"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assigned sensor group")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.sensor_type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Regional Network"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Assigned sensor type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.country_scope"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Domestic"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Domestic, International, or Mixed, depending on countries of src and dst")))),Object(l.b)("h3",{id:"source-fields-destination-fields-similarly"},"Source Fields (Destination Fields similarly)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_ip"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"171.64.68.x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deidentified IP address")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_port"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"80"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"port used")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_asn"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ASN of the IP from geoip ASN database or the ASN from the flow header")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_location.lat"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"37.423"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"latitude of IP from geoip database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_location.lon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-122.164"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"longitude of IP from geoip database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_country_name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"United States"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"country of IP from geoip database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_continent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"North America"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"continent of IP from geoip database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_organization"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stanford University"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"organization that owns the AS of the IP from geoip ASN database")))),Object(l.b)("h3",{id:"source-science-registry-fields--destination-fields-similarly"},"Source Science Registry Fields  (Destination Fields similarly)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.resource"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stanford - ImageNet"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Resource name from SciReg")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.resource_abbr"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Resource abbreviation (if any)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.discipline"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CS. Intelligent Systems"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The science discipline that uses the resource (ie host). Note that  not the src MAY not have the same discipline as the dst.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.role"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Storage"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Role that the host plays")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.org_name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stanford University"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The organization the manages and/or uses the resource, as listed in the Science Registry")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.org_abbr"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stanford"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A shorter name for the organization. May not be the official abbreviation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.projects"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Can be an array of projects ","[we may change this field name soon]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.latitude"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"37.4178"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Resource's location, as listed in the Science Registry")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.scireg.src.longitude"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-122.172"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("h3",{id:"preferred-fields"},'"Preferred" fields'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_preferred_org"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stanford University"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If the IP was found in the Science Registry, these are the SciReg values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_preferred_location.lat"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"37.417800"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Otherwise, they are the geoip values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"meta.src_preferred_location.lon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-122.172000"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("h3",{id:"values"},"Values"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"example"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.num_bits"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"939, 458, 560"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sum of the number of bits in all the stitched flows")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.num_packets"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"77, 824"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sum of the number of packets in all the stitched flows")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.duration"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.891"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Calculated as end minus start")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.bits_per_second"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"241, 443, 988"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Calculated as num_bits divided by duration")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.packets_per_second"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20, 001"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Calculated as num_packets divided by duration")))),Object(l.b)("h3",{id:"tstat-values"},"Tstat Values"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_cwin_max"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1549681")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_cwin_min"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"17")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_initial_cwin"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"313")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_max_seg_size"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"64313")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_min_seg_size"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"17")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_mss"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8960")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_out_seq_pkts"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_pkts_dup"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_pkts_fc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_pkts_fs"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_pkts_reor"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_pkts_rto"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_pkts_unfs"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_pkts_unk"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_pkts_unrto"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_rexmit_bytes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1678")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_rexmit_pkts"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_rtt_avg"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.044")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_rtt_max"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"39.527")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_rtt_min"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_rtt_std"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.276")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_sack_cnt"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_win_max"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1549681")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_win_min"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"17")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"values.tcp_window_scale"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"13")))))}s.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=s(a),O=n,j=d["".concat(b,".").concat(O)]||d[O]||p[O]||l;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);