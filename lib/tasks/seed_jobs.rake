task seed_jobs: :environment do
    
    job = []
    20.times do
        job << Job.new(
            company: Faker::Company.name,
            position: Faker::Job.position,
            description: Faker::Job.title
        )
    end

    Job.import(job)
    puts 'complete'
end

# https://stackoverflow.com/questions/5641747/rails-how-to-run-rake-task