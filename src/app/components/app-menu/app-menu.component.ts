import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Character',
        icon: 'fas fa-id-card',
        items: [
          {
            label: 'Stats',
            icon: 'fas fa-chart-bar',
            items: [
              {
                label: 'Production',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/production',
              },
              {
                label: 'Build Character',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/build',
              },
              {
                label: 'Achievement',
                icon: 'pi pi-fw pi-plus',
                routerLink: 'achievement',
              },
            ],
          },
          {
            label: 'Skills',
            icon: 'fas fa-magic',
            items: [
              {
                label: 'Combo',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Star Gem',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Shortcut Settings',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            separator: true,
          },
          {
            label: 'Equipment',
            icon: 'fas fa-child',
          },
          {
            label: 'Quest',
            icon: 'fas fa-flag',
          },
          {
            label: 'Switch Character',
            icon: 'fas fa-people-arrows',
            items: [
              {
                label: 'Tank',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Mage',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Blacksmith',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            label: 'Regislet',
            icon: 'fas fa-user-tag',
          },
          {
            label: 'Emblems',
            icon: 'fas fa-trophy',
            items: [
              {
                label: 'Unreceived',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Daily',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Weekly',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Hunting',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Weekly',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            label: 'Change App.',
            icon: 'fas fa-user-edit',
          },
        ],
      },
      {
        label: 'Items',
        icon: 'fas fa-briefcase',
      },
      {
        label: 'Map',
        icon: 'fas fa-map-marked-alt',
        routerLink: '/map',
      },
      {
        label: 'Terminal',
        icon: 'fas fa-sitemap',
        items: [
          {
            label: 'Go to Land',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Your Land',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Newest',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Guild Member',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Friend',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            label: 'Go to GB',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Switch Channel',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Global',
                icon: 'pi pi-fw pi-plus',
                items: [
                  {
                    label: 'Channel 1',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 2',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 3',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 4',
                    icon: 'pi pi-fw pi-plus',
                  },
                ],
              },
              {
                label: 'International 1',
                icon: 'pi pi-fw pi-plus',
                items: [
                  {
                    label: 'Channel 1',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 2',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 3',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 4',
                    icon: 'pi pi-fw pi-plus',
                  },
                ],
              },
              {
                label: 'International 2',
                icon: 'pi pi-fw pi-plus',
                items: [
                  {
                    label: 'Channel 1',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 2',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 3',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 4',
                    icon: 'pi pi-fw pi-plus',
                  },
                ],
              },
              {
                label: 'English 1',
                icon: 'pi pi-fw pi-plus',
                items: [
                  {
                    label: 'Channel 1',
                    icon: 'pi pi-fw pi-plus',
                  },
                  {
                    label: 'Channel 2',
                    icon: 'pi pi-fw pi-plus',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'News',
        icon: 'fas fa-newspaper',
        items: [
          {
            label: 'Official News',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'New Gift',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Invitation',
            icon: 'pi pi-fw pi-plus',
          },
        ],
      },
      {
        label: 'Orb Shop',
        icon: 'fas fa-store',
      },
      {
        label: 'Community',
        icon: 'fas fa-calendar-week',
        items: [
          {
            label: 'Party',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Merc Registration',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Hire Merc',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Call Pet',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            label: 'Friends',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Friend List',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Friend Merc',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            label: 'Guild',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Member Info',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'View Notice',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Guild Points',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Guild Merc',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Go to GB',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            label: 'Emotion',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Mailbox',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Send Mail',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Check Mail',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Send Gift',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Check Gift',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Present',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            label: 'Mood Message',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Whisper History',
            icon: 'pi pi-fw pi-plus',
          },
        ],
      },
      {
        label: 'Settings',
        icon: 'fas fa-cogs',
        items: [
          {
            label: 'Shortcuts',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Auto Item',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Chat',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'System',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Graphics',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Audio',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Character Name',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Reacquire Data',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Account',
            icon: 'fas fa-user-cog',
            items: [
              {
                label: 'Logout',
                icon: 'fas fa-sign-out-alt',
                routerLink: '/login',
              },
            ],
          },
        ],
      },
    ];
  }
}
