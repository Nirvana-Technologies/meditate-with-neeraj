import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [CommonModule],
  templateUrl: './terms-and-conditions.html',
  styleUrl: './terms-and-conditions.scss',
})
export class TermsAndConditions {
  termsAndConditions: any = [
    {
      id: 1,
      label: 'Acceptance of Terms',
      desc: 'By using MeditateWithNeeraj, you confirm that you accept these Terms and agree to comply with them.',
    },
    {
      id: 2,
      label: 'Purpose of the App',
      desc: 'MeditateWithNeeraj provides practical, easy-to-follow guidance on Swar Yoga, Pranayama, Asana, and Dhyana. The app is intended for personal use to support mental clarity, emotional balance, and physical well-being.',
    },
    {
      id: 3,
      label: 'User Responsibility',
      desc: 'You are responsible for ensuring that your health condition allows you to engage in breathwork, yoga, or meditation practices. Please consult a medical professional before starting any new wellness routine, especially if you have existing health concerns.',
    },
    {
      id: 4,
      label: 'Intellectual Property',
      desc: 'All content on the app—including text, audio, video, images, designs, logos, and software—is the property of MeditateWithNeeraj and is protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from this content without written permission.',
    },
    {
      id: 5,
      label: 'Use Restrictions',
      desc: 'You agree to use the app only for lawful and personal wellness purposes. Misuse, including but not limited to unauthorized distribution of content or engaging in harmful behavior within the app, may result in termination of access.',
    },
    {
      id: 6,
      label: 'Payments and Subscriptions',
      desc: 'Certain features may require payment through subscriptions or one-time purchases. By purchasing, you agree to the pricing, billing, and subscription terms displayed at the time of purchase. All payments are non-refundable unless stated otherwise.',
    },
    {
      id: 7,
      label: 'Medical Disclaimer',
      desc: 'The guidance provided is for educational and self-practice purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. Use the app at your own risk.',
    },
    {
      id: 8,
      label: 'Limitation of Liability',
      desc: 'MeditateWithNeeraj and its affiliates are not liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the app, including any injuries resulting from practice.',
    },
    {
      id: 9,
      label: 'Modification of Terms',
      desc: 'We may update these Terms at any time. Continued use of the app after changes are posted signifies your acceptance of the updated Terms.',
    },
    {
      id: 10,
      label: 'Governing Law',
      desc: 'These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Himachal, India.',
    },
    {
      id: 12,
      label: 'Contact Us',
      desc: 'If you have any questions about these Terms, please contact us at support@meditatewithneeraj.com',
    },
  ];
}
