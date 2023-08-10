export enum Steps {
  WELCOME = 'welcome',
  GUEST_NAME = 'guestName',
  GUEST_TYPE = 'guestType',
  GUEST_LIST = 'guestList',
}

export enum GuestType {
  ADULT = 'ADULT',
  CHILD = 'CHILD',
  BABY = 'BABY',
}


export interface Guest {
  name: string;
  type: GuestType;
}


export const getGuestTypeLabel = (type: GuestType) => {
  switch (type) {
    case GuestType.ADULT:
      return 'Adultos e adolescentes';
    case GuestType.CHILD:
      return 'Crianças entre 3 e 12 anos';
    case GuestType.BABY:
      return 'Crianças até 2 anos';
    default:
      return '';
  }
}
