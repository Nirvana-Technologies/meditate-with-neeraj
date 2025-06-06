import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  descriptionParagraphs: string[] = [
    `Neeraj is a yoga practitioner with a deep interest in breath control and mindfulness. Over the years, he has studied traditional practices and refined his understanding of how the breath connects to both body and mind. His approach is simple and grounded, helping people find calm and clarity through gentle movement and conscious breathing.`,
    `He now shares these practices through online seminars, making them accessible to people from different backgrounds and time zones. The sessions are practical and easy to follow, with an emphasis on building consistency rather than intensity. Neeraj encourages students to move at their own pace and stay curious about their experience.`,
    `His teaching style is low-key and respectful, creating space for people to explore without pressure. Whether someone is new to yoga or returning after a long break, Neeraj offers a steady, supportive presence.`,
  ];
}
