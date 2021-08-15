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
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Stats',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Production',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Build Character',
                icon: 'pi pi-fw pi-plus',
              },
              {
                label: 'Achievement',
                icon: 'pi pi-fw pi-plus',
              },
            ],
          },
          {
            label: 'Skills',
            icon: 'pi pi-fw pi-plus',
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
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Quest',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Switch Character',
            icon: 'pi pi-fw pi-plus',
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
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Emblems',
            icon: 'pi pi-fw pi-plus',
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
            icon: 'pi pi-fw pi-plus',
          },
        ],
      },
      {
        label: 'Items',
        icon: 'pi pi-fw pi-briefcase',
      },
      {
        label: 'Map',
        icon: 'pi pi-fw pi-map',
      },
      {
        label: 'Terminal',
        icon: 'pi pi-fw pi-sitemap',
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
        icon: 'pi pi-fw pi-globe',
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
        icon: 'pi pi-fw pi-shopping-cart',
      },
      {
        label: 'Community',
        icon: 'pi pi-fw pi-calendar',
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
    ];
  }
}
