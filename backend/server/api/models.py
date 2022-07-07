from django.db import models


# Create your models here.


class CandidateInfo(models.Model):
    full_name = models.CharField(
        max_length=150,
        verbose_name="полное имя",
        null=True,
    )
    skills = models.ManyToManyField("Skills")
    contacts = models.OneToOneField("Contacts", on_delete=models.PROTECT)
    education = models.ManyToManyField("Education")
    experience = models.ManyToManyField("Experience")
    avatar = models.TextField(null=True)
    resume_link = models.TextField(null=True)
    project_link = models.TextField(null=True)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "информация о кандидате"
        verbose_name_plural = "информация о кандидате"


class Skills(models.Model):
    skill_name = models.CharField(
        max_length=256,
        verbose_name="умения и навыки",
        null=True,
    )

    def __str__(self):
        return self.skill_name

    class Meta:
        verbose_name = "умения и навыки"
        verbose_name_plural = "умения и навыки"


class Contacts(models.Model):
    git_hub = models.CharField(max_length=256, verbose_name="github")
    git_flic = models.CharField(max_length=256, verbose_name="gitflic")
    vk = models.CharField(max_length=256, verbose_name="vk")
    email = models.EmailField(max_length=100, verbose_name="почта")
    phone_number = models.CharField(
        max_length=17, default="1234", verbose_name="номер телефона"
    )

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "контакты"
        verbose_name_plural = "контакты"


class Education(models.Model):
    edu_type = models.CharField(
        max_length=256, default="университет", verbose_name="тип образования"
    )

    edu_description = models.TextField(verbose_name="описание образования")

    def __str__(self):
        return self.edu_type

    class Meta:
        verbose_name = "образование"
        verbose_name_plural = "образование"


class Experience(models.Model):
    exp_type = models.CharField(
        max_length=200, default="LMARKT", verbose_name="название опыта"
    )
    exp_description = models.TextField(verbose_name="описание опыта работы")

    def __str__(self):
        return self.exp_type

    class Meta:
        verbose_name = "опыт работы"
        verbose_name_plural = "опыт работы"
