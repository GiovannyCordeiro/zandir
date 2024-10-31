from django.core.management.base import BaseCommand
from movies_api.models import Movies

class Command(BaseCommand):
    help = 'Cria um registro no modelo Movies'

    def handle(self, *args, **kwargs):
        Movies.objects.create(
            title="Hobbit: An unexpected Journey",
            year_realease="2012",
            plot='A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it from the dragon Smaug',
            img_url="https://cdn.kobo.com/book-images/cf7b70bc-daea-454f-80a7-d911ddbfdb80/1200/1200/False/visual-companion-the-hobbit-an-unexpected-journey.jpg",
        )
        Movies.objects.create(
            title="Toy Story",
            year_realease="1995",
            plot='A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boys bedroom',
            img_url="https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg",
        )
        Movies.objects.create(
            title="Galactic Drift: Beyond the Nebula",
            year_realease="2023",
            plot='In a future where humanity explores deep space, a team of astronauts embarks on a mission to investigate a mysterious cosmic fog threatening to consume entire galaxies.',
            img_url="https://sougato.com.br/wp-content/uploads/2022/02/gato-astronauta-espaco.jpg",
        )
        Movies.objects.create(
            title="The Last Harvest",
            year_realease="2021",
            plot='In a remote village on the brink of an environmental crisis, a young farmer discovers that her crops have mysterious properties that could reverse the devastating drought.',
            img_url="https://johnsloaneart.com/cdn/shop/products/HilltopHarvestbyJohnSloane.jpg?v=1604173816",
        )
        self.stdout.write(self.style.SUCCESS('Filmes criados com sucesso!'))
