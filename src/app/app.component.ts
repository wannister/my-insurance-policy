import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User, UserSchema } from './model/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = Object.keys(UserSchema);
  dataSchema = UserSchema;
  dataSource = new MatTableDataSource<User>();

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.dataSource.data = res;
    });
  }

  editRow(row) {
    if (row.id === 0) {
      this.userService.addUser(row).subscribe((res) => {
        console.log(res)
        row.id = res.id;
        row.isEdit = false;
      });
    } else {
      this.userService.updateUser(row.id, row).subscribe((res) => {
        row.id = res.id;
        row.isEdit = false;
      });
    }
  }

  addRow() {
    const newRow: User = {
      id: 0,
      policyNumber: 0,
      startDate: new Date(),
      endDate:  new Date(),
      description: '',
      firstName: '',
      surName: '',
      dateBirth:  new Date(),
      isEdit: true,
    };

    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id) {
    this.userService.deleteUser(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (u: User) => u.id !== id
      );
    });
  }
}
