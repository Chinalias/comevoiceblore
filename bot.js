const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**السلام عليكم
ولي مع صوتك حكاية أخرى وحب مختلف يزداد في كل مرة يجتاح فيها مسامعي يأخذني من أشد أعماق الشقاء الى أقصى حدود للسعاده.
[ __ https://discord.gg/Bk6FPXk __]
حياك ي عيني ...**
[ ${member}  ]
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**السلام عليكم
ولي مع صوتك حكاية أخرى وحب مختلف يزداد في كل مرة يجتاح فيها مسامعي يأخذني من أشد أعماق الشقاء الى أقصى حدود للسعاده.
[ __ https://discord.gg/Bk6FPXk __]
حياك ي عيني ...**
[ ${member}  ]-
`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
