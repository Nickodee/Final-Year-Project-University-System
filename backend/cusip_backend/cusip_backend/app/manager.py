from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password, **kwargs):
        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self,email, password, **kwargs):
        kwargs.setdefault('is_active', True)
        kwargs.setdefault('is_staff', False)
        kwargs.setdefault('is_superuser', True)

        if  kwargs.get('is_staff') is not True:
            raise ValueError("Superuser must be assigned to is_staff=True")
        if kwargs.get('is_superuser') is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True")
        return self.create_user(email, password, **kwargs)