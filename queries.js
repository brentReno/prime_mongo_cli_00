1. db.bios.find({awards:{$exists: true}});
2. db.bios.find({awards:{$exists: false}});
3. db.bios.find({contribs:{ $in:["OOP", "UNIX"]}});
4. db.bios.find({"awards.award":"Turing Award"});
5. db.bios.find({$and:[{"_id":{$gte:3}},{ "_id":{$lte:7}}]});
6. db.bios.find({"awards.year": {$lt:2000}});
7. db.bios.find({$and:[{birth:{$exists: true}},{death:{$exists: false}}]});
