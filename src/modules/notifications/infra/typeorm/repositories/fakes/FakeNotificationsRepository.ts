import { ObjectID } from 'mongodb';

import ICreateNotificationDTO from '@modules/notifications/interfaces/dtos/ICreateNotificationDTO';

import INotificationsRepository from '@modules/notifications/interfaces/repositories/INotificationsRepository';

import Notification from '../../schemas/Notification';

class FakeNotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, {
      id: new ObjectID(),
      recipient_id,
      content,
    });

    this.notifications.push(notification);

    return notification;
  }
}

export default FakeNotificationsRepository;
