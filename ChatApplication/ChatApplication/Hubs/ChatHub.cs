using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ChatApplication.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string message, string user)
        {
            await Clients.All.SendAsync("ReceiveMessage", message, user);
        }
    }
}