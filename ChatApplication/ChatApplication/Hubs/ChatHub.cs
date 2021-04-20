using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ChatApplication.Hubs
{
    public static class UserHandler
    {
        public static HashSet<Users> SignalRUsers = new HashSet<Users>();
    }

    public class Users
    {
        public string ConnectionId { get; set; }
        public string UserName { get; set; }
        public int ClientID { get; set; }
    }

    public class ChatHub : Hub
    {
        //Sends message to all clients connected to the hub
        public async Task SendMessage(string message, string user)
        {
            await Clients.All.SendAsync("ReceiveMessage", message, user);
        }
        //Sends message to a specific user connected to the hub
        public Task SendPrivateMessage(string user, string message)
        {
            return Clients.User(user).SendAsync("ReceiveMessage", message);
        }
        //Sends message to the caller of this function (logged in users connection ID)
        public Task SendMessageToCaller(string user, string message)
        {
            return Clients.Caller.SendAsync("ReceiveMessage", user, message);
        }
        //Sends message to a passed group name
        public Task SendMessageToGroup(string groupName, string user, string message)
        {
            return Clients.Group(groupName).SendAsync("ReceiveMessage", user, message);
        }
        //Adds the logged in user to a passed group name
        public async Task AddToGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).SendAsync("Send", $"{Context.ConnectionId} has joined the group {groupName}.");
        }
        //Removes the logged in user from a passed group name
        public async Task RemoveFromGroup(string groupName)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).SendAsync("Send", $"{Context.ConnectionId} has left the group {groupName}.");
        }
        //Invoked when a user connects to the hub
        //Can use this to manage active connections. (Users who are currently online)
        //Add user to active list
        public override async Task OnConnectedAsync()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "SignalR Users");
            await base.OnConnectedAsync();
        }
        //Invoked when a user disconnnects the hub
        //Can use this to manage active connections. (Users who are currently online)
        //Remove user from active list
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var item = UserHandler.SignalRUsers.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);
            if (item != null)
            {
                UserHandler.SignalRUsers.Remove(item); //remove connectionID from list of active connections
                await Clients.All.SendAsync("UserDisconnected", item.UserName); //send user disconnected event
            }
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, "SignalR Users");
            await base.OnDisconnectedAsync(exception);
        }
        //return list of all active connections
        private List<Users> GetAllActiveConnections()
        {
            return UserHandler.SignalRUsers.ToList();
        }
        public List<Users> getAllClientConnections(int clientID)
        {
            List<Users> allItems = GetAllActiveConnections();
            var clientConnections = allItems;
            return (clientConnections.FindAll(user => user.ClientID == clientID).ToList());
        }
    }
}